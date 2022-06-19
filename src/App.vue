<template>
  <Nav/>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Nav from "./components/Nav.vue";
import { useCoinsStore } from "./services/coinsStore";

const CoinsStore = useCoinsStore();

onMounted(() => {
  CoinsStore.getCoins()
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");
* {
  box-sizing: border-box;
  font-family: inter, sans-serif;
  margin: 0;
  padding: 0;
  color: white;
  text-decoration: none;
}
:root {
  --nav-item-color: #e0e9ff;
}

body {
  background: #fafafa;
  background: rgb(33, 36, 44);
  background: linear-gradient(
    18deg,
    hsl(224, 14%, 15%) 0%,
    hsl(223, 30%, 45%) 100%
  );
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 7rem;
  padding-bottom: 3rem;
}

body::-webkit-scrollbar {
    width: 10px;
}
body::-webkit-scrollbar-track {
  background: linear-gradient(
    18deg,
    #343E56 0%,
    #506495 100%
  );
  padding: 10px;
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(46, 55, 77);
  border-radius: 20px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>