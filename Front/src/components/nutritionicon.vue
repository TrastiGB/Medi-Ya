<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 100 100"
    class="nutrition-icon"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Plato -->
    <circle cx="50" cy="50" r="25" fill="#8BC34A" stroke="#558B2F" stroke-width="2" />
    
    <!-- Tenedor -->
    <rect x="60" y="35" width="5" height="25" rx="1" fill="#D7CCC8" :class="{ 'move-fork': hover }"/>
    <rect x="58" y="30" width="2" height="7" fill="#D7CCC8" :class="{ 'move-fork': hover }"/>
    <rect x="61" y="30" width="2" height="7" fill="#D7CCC8" :class="{ 'move-fork': hover }"/>
    <rect x="64" y="30" width="2" height="7" fill="#D7CCC8" :class="{ 'move-fork': hover }"/>

    <!-- Hoja (Animada) -->
    <path d="M40 45 Q42 35 50 37 Q55 40 52 50 Z" fill="green" :class="{ 'grow-leaf': hover }"/>
  </svg>
</template>

<script setup>
import { ref } from "vue";

const hover = ref(false);
</script>

<style scoped lang="scss">
.nutrition-icon {
  display: block;
  margin: auto;
}

/* Animación del tenedor */
.move-fork {
  animation: forkMove 0.4s ease-in-out forwards;
}

@keyframes forkMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-3px);
  }
}

/* Animación de la hoja */
.grow-leaf {
  animation: leafGrow 0.4s ease-in-out forwards;
}

@keyframes leafGrow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}
</style>
