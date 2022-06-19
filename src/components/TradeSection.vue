<template>
  <div class="trade-ctn">
    <input type="number" v-model="input" placeholder="Cantidad de moneda 1" />
    <svg
      stroke="currentColor"
      fill="#fff"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      @click="switchSocket"
    >
      <path
        d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"
      ></path>
    </svg>
    <!-- <input type="number" v-model="input2" placeholder="Cantidad de moneda 2" /> -->
    <h3>{{ output }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useCoinsStore } from "../services/coinsStore";

const CoinsStore = useCoinsStore();
const { compare } = storeToRefs(CoinsStore);
const { switchSocket } = CoinsStore;

const input = ref(0);
const output = ref(0);
const proportionValue = computed(() => {
  return (
    compare.value[0].coin.current_price / compare.value[1].coin.current_price
  );
});
const tradeCoins = () => {
  output.value = input.value * proportionValue.value;
} 
watch(input, tradeCoins);
watch(compare.value, tradeCoins);
</script>

<style scoped>
.trade-ctn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  /* background-color: #fff; */
  border-radius: 0.5rem;
  /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); */
}
input, h3 {
  background: rgb(28, 41, 61);
  outline: none;
  border: none;
  padding: 1rem 1rem 0.8rem;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.5rem;
  max-width: 17rem;
  width: 100%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
svg{
  width: 50px;
  height: 50px;
  transform: rotate(90deg);
}
</style>
