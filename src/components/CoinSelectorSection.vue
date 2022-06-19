<template>
  <div class="coin-selector-section">
    <label for="coin1">Moneda {{ props.index + 1 }}</label>
    <div class="input-ctn">
      <Transition name="slide-up">
        <button
          v-if="!toggleSearchRef[props.index]"
          @click="btnInputHandler(props.index)"
        >
          Buscar
        </button>
        <input
          v-else-if="toggleSearchRef[props.index]"
          type="text"
          ref="input"
          :id="'coin' + (props.index + 1)"
          placeholder="Nombre o signo"
          v-model="search"
          @focus="toggleInput(props.index)"
          @blur="toggleInput(props.index)"
        />
      </Transition>
      <Transition>
        <ul v-if="compare[props.index].input">
          <CompareListItem :index="props.index" />
        </ul>
      </Transition>
    </div>
    <CoinSelector :index="props.index" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCoinsStore } from "../services/coinsStore";
import CompareListItem from "../components/CompareListItem.vue";
import CoinSelector from "../components/CoinSelector.vue";

const props = defineProps<{
  index: 0 | 1;
}>();

// extrayendo estados de la store
const CoinsStore = useCoinsStore();
const { search, compare } = storeToRefs(CoinsStore);
const { openInput, closeInput } = CoinsStore;

// estados para los inputs
const toggleSearchRef = ref([false, false]);
const input = ref<HTMLInputElement | null>(null);

const toggleInput = (index: 0 | 1) => {
  if (compare.value[index].input === true) {
    // setTimeout(() => {
    toggleSearchRef.value[index] = false;
    closeInput(index);
    // }, 50);
  } else {
    openInput(index);
  }
};

const btnInputHandler = (index: 0 | 1) => {
  toggleSearchRef.value[index] = true;
  setTimeout(() => {
    input.value?.focus();
  }, 1);
};
</script>

<style scoped>
.coin-selector-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1.5rem;
}
label {
  font-size: 1.5rem;
  font-weight: 700;
  /* color: #fff; */
  /* margin-bottom: 1rem; */
}
.input-ctn{
  position: relative;
  display: flex;
  flex-direction: column;
}
button {
  font-size: 1.2rem;
  border-radius: 50px;
  box-shadow: var(--shadow-input-btn);
  background: transparent;
  color: var(--nav-item-color);
  font-weight: 500;
  padding: 0.5rem 0;
  width: var(--width-input-btn);
  border: none;
}
input {
  font-size: 1.2rem;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--nav-item-color);
  border: none;
  outline: none;
  width: var(--width-input-btn);

  font-size: 1.2rem;
  border-radius: 50px;
  box-shadow: var(--shadow-input-btn);
}
input::placeholder {
  color: hsla(226, 61%, 67%, 0.522);
}
ul{
  position: absolute;
  top: 50px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
  transition-delay: 2000ms;
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
