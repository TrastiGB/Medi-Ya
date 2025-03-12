<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 100 100"
    class="hygiene-icon"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Dispensador -->
    <rect x="30" y="30" width="40" height="50" rx="5" fill="#42A5F5" />
    <rect x="40" y="20" width="20" height="10" rx="2" fill="#1E88E5" />
    
    <!-- Espuma en la boquilla -->
    <circle cx="50" cy="25" r="5" fill="white" />
    <circle cx="55" cy="23" r="3" fill="white" />
    <circle cx="45" cy="23" r="3" fill="white" />

    <!-- Burbujas animadas -->
    <circle cx="40" cy="50" r="5" fill="white" :class="{ 'bubble': hover }" />
    <circle cx="60" cy="55" r="4" fill="white" :class="{ 'bubble': hover }" />
  </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
</script>

<style scoped lang="scss">
.hygiene-icon {
  display: block;
  margin: auto;
}

/* Animación de las burbujas */
.bubble {
  animation: bubbleRise 1s ease-in-out forwards;
}

@keyframes bubbleRise {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-10px);
    opacity: 0;
  }
}
</style>
