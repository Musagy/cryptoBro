<template>
    <div>
      <h2>{{ coin.name }}</h2>
      <p>$ {{ parseFloat(coin.current_price.toString()).toFixed(2) }}</p>
    </div>
    <img :src="coin.image" :alt="coin.id" />
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { Coin } from '../App';

const props = defineProps<{ coin: Coin }>();
const coin = toRef(props, 'coin');
</script>

<style scoped>

</style>