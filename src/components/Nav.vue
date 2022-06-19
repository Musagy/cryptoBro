<template>
  <header>
    <nav>
      <router-link to="/" class="logo">CryptoBro</router-link>
      <div class="nav-items">
        <template v-if=" getPath === '/' ">
          <input
            type="text"
            class="search-ctn"
            v-model="search"
            id="search"
            placeholder="Buscar"
          />
        </template>
        <router-link v-else to="/" class="nav-btn">Inicio</router-link>
        <router-link to="/compare" class="nav-btn">Comparar</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, watch } from "vue";
import { useRoute } from 'vue-router';
import { useCoinsStore } from "../services/coinsStore";

const CoinsStore = useCoinsStore();

const { search } = storeToRefs(CoinsStore);
const { searchCoins } = CoinsStore

const getPath = computed(() => {
  const route = useRoute();
  return route.path;
})

watch(search, () => {
  searchCoins()
})
</script>

<style scoped>
/* header */
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;

  background-color: #52618590;
  /* border-radius: 0 0 2rem 2rem; */
  border-bottom: 1px solid #fff;
  backdrop-filter: blur(3rem);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 60rem;
  padding: 1rem;
  margin: auto;
}
.logo {
  color: hsl(0, 0%, 100%);
  font-weight: 700;
  font-size: 2.5rem;
}
.nav-items {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.search-ctn,
.nav-btn {
  font-size: 1.2rem;
  border-radius: 50px;
  box-shadow: 9px 9px 18px #3e4a65, -9px -9px 18px #6678a5;
}
#search {
  font-size: 1.2rem;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background: transparent;
  color: var(--nav-item-color);
  border: none;
  outline: none;
}
#search::placeholder {
  color: hsl(224, 27%, 29%);
}
.nav-btn {
  background: transparent;
  color: var(--nav-item-color);
  font-weight: 500;
  padding: 0.5rem 1rem;
  /* padding: 0 0.5rem; */
  border: none;
}
</style>
