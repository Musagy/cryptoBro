<template>
  <div class="coin-select__1">
    <img
      v-if="!!compare[props.index].coin.image"
      :src="compare[props.index].coin.image"
      :alt="compare[props.index].coin.id"
    />
    <img v-else src="/src/assets/dollar.svg" alt="dollar" />
    <div>
      <h3>
        {{ compare[props.index].coin.name }}
      </h3>
      <p>
        $ {{ compare[props.index].coin.current_price }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCoinsStore } from '../services/coinsStore';

const props = defineProps<{
  index: 0 | 1;
}>()

const CoinsStore = useCoinsStore();

const { compare } = storeToRefs(CoinsStore);
// const { value } = toRef(props);

</script>

<style scoped>
.coin-select__1 {
  display: flex;
  background: #212835;

  justify-content: center;
  align-items: center;

  width: 12rem;
  height: 6rem;

  border-radius: 0.5rem;
  box-shadow: inset 20px 20px 60px #1c222d, inset -20px -20px 60px #262e3d;
}
.coin-select__1 img {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}
</style>
