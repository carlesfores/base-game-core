<script setup>
import {ref, onMounted, onUnmounted} from "vue";
import InitGame from "./game-core/index";

const game = ref();

onMounted(() => {
  game.value = InitGame('game-core-container');
});

onUnmounted(() => {
  game.value.destroy(true);
  game.value = null;
});

</script>

<template>
  <div id="game-core-container"></div>
</template>

<style scoped>
  
</style>
