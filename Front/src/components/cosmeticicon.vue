<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 100 100"
    class="cosmetic-icon"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Frasco -->
    <rect x="30" y="30" width="40" height="40" rx="5" fill="#F06292" />
    <!-- Tapa -->
    <rect x="35" y="20" width="30" height="10" rx="2" fill="#D81B60" :class="{ 'rotate': hover }" />
  </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
</script>

<style scoped lang="scss">
.cosmetic-icon {
  display: block;
  margin: auto;
}

.rotate {
  animation: rotateLid 0.5s ease-in-out forwards;
}

@keyframes rotateLid {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(15deg);
  }
}
</style>
