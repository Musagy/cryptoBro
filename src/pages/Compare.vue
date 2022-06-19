<template>
  <h1>Compare monedas</h1>
  <div class="comparator-ctn">
    <CoinSelectorSection :index="0" />

    <TradeSection />

    <CoinSelectorSection :index="1" />
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useCoinsStore } from "../services/coinsStore";
import CoinSelectorSection from "../components/CoinSelectorSection.vue";
import TradeSection from "../components/TradeSection.vue";

// extrayendo estados de la store
const CoinsStore = useCoinsStore();
const { search } = storeToRefs(CoinsStore);
const { searchCoins } = CoinsStore;

watch(search, () => {
  searchCoins();
});
</script>

<style scoped>
:global(:root) {
  --width-input-btn: 15rem;
  --shadow-input-btn: 9px 9px 18px #303951, -9px -9px 18px #404d6d;
}
h1 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
}
.comparator-ctn{
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (max-width: 820px) {
  .comparator-ctn {
    flex-direction: column;
  }
}
</style>
