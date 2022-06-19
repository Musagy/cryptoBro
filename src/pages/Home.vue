<template>
  <div class="table-ctn">
    <table>
      <thead>
        <tr>
          <th v-for="title in columnsTitles">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="c in CoinsStore.coins">
          <tr v-if="c.current_price !== null">
            <CryptoInfoList :coin="c" />
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import CryptoInfoList from "../components/CryptoInfoList.vue";
import { useCoinsStore } from "../services/coinsStore";

// const props = defineProps<{search: string}>()

const CoinsStore = useCoinsStore();

const columnsTitles: String[] = [
  "top",
  "Moneda",
  "Precio (USD)",
  "Cambio (24h)",
  "Volumen (24h)",
];
</script>

<style scoped>
.table-ctn {
  width: 100%;
  max-width: 60rem;
  margin: auto;
  padding: 1rem;

  background-color: hsla(223, 94%, 87%, 20%);
  border-radius: 2rem;
  backdrop-filter: blur(1rem);
}
:global(table) {
  width: 100%;
  /* border-collapse: 10px solid #fff; */
}

td {
  border-top: rgba(255, 255, 255, 0.26) solid 1px;
}
</style>
