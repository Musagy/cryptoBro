<template :v-if="willItBeRendered">
  <td>{{ c.market_cap_rank }}</td>
  <td class="coin-title">
    <img :src="c.image" :alt="c.id" width="30" />
    {{ c.name }}
    <span>
      {{ c.symbol.toLocaleUpperCase() }}
    </span>
  </td>
  <td>$ {{ parseFloat(c.current_price.toString()).toFixed(2) }}</td>
  <td :class="[c.price_change_percentage_24h > 0 ? 'positive' : 'negative']">
    {{ c.price_change_percentage_24h }}%
  </td>
  <td>$ {{ c.total_volume }}</td>
</template>

<script setup lang="ts">
import { onMounted, toRef } from "vue";
import { Coin } from "../App";

const props = defineProps<{ coin: Coin }>();
const c = toRef(props, "coin");
const willItBeRendered = c.value.current_price !== null;

// cancelar la montura el componente si no tiene precio
// onMounted(() => {
//   if (c.value.current_price === null) {
//   }
// });

</script>

<style scoped>
td {
  text-align: center;
}

.coin-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 27rem;
  width: 100%;
  padding-left: 2rem;
  gap: 1.5rem;
  text-align: left;
  margin-right: -9rem;
}
.coin-title span{
  /* font-size: 0.8rem; */
  color: hsla(0, 0%, 100%, 0.342);
}

.positive {
  color: hsl(115, 72%, 61%);
}
.negative {
  color: hsl(0, 72%, 61%);
}
</style>
