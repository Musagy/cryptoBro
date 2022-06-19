<template>
  <li v-if="search.length === 0" @click="clearASocket(props.index)">
    <div>
      <h2>Dólar</h2>
      <p>$ 1.00</p>
    </div>
    <img src="/src/assets/dollar.svg" alt="">
  </li>
  <template v-for="coin in coins">
    <li v-if="coin.current_price !== null" @click="selectCoin(coin, props.index)">
      <CompareListItemStructure :coin="coin" />
    </li>
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Coin } from "../App";
import { useCoinsStore } from "../services/coinsStore";
import CompareListItemStructure from "./CompareListItemStructure.vue";

const props = defineProps<{
  index: 0 | 1;
}>()

const CoinsStore = useCoinsStore();

const { search, coins } = storeToRefs(CoinsStore);
const { addCoin, closeInput, clearASocket } = CoinsStore;

const selectCoin = (coin: Coin, index: 0 | 1) => {
  addCoin(coin, index);
  closeInput(index);
};
</script>

<style>
ul {
  width: min-content;
  background-color: rgba(20, 31, 57, 0.62);
  border-radius: 1rem;
  overflow-y: scroll;
  max-height: 20rem;

  /* scrollbar-gutter: stable; */
}
ul::-webkit-scrollbar {
  width: 10px;
}
ul::-webkit-scrollbar-track {
  background-color: rgba(20, 31, 57, 0.62);

  border-radius: 100px;
}
ul::-webkit-scrollbar-thumb {
  background-color: rgba(12, 21, 42, 0.839);

  border-radius: 100px;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1rem 0.5rem;
  border-bottom: 1px solid rgba(102, 114, 168, 0.476);
  /* background-color: rgba(23, 43, 92, 0.62); */
}
li img {
  width: 2.5rem;
  height: 2.5rem;
  /* margin-right: 1rem; */
}
ul :last-child {
  border: none;
}
li:hover {
  background-color: rgba(15, 23, 44, 0.8);
}
</style>
