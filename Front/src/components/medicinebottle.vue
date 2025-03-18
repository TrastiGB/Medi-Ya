<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 100 100"
    class="medicine-bottle"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <!-- Tapa animada -->
    <rect
      x="25"
      y="10"
      width="50"
      height="15"
      rx="5"
      fill="#2E7D32"
      :class="{ 'open-lid': hover }"
    />
    <!-- Frasco -->
    <rect x="30" y="20" width="40" height="60" rx="10" fill="#4CAF50" stroke="#2E7D32" stroke-width="2" />
    <!-- Pastillas dentro -->
    <circle cx="50" cy="50" r="5" fill="white" />
    <circle cx="50" cy="65" r="5" fill="white" />
    <circle cx="50" cy="80" r="5" fill="white" />
  </svg>
</template>

<script setup lang="ts">
import { ref } from "vue";

const hover = ref(false);
</script>

<style scoped lang="scss">
.medicine-bottle {
  display: block;
  margin: auto;
  transition: transform 0.3s ease;
}

.medicine-bottle:hover {
  transform: scale(1.1);
}

/* Animación de la tapa */
.open-lid {
  animation: openLid 0.3s forwards;
}

@keyframes openLid {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
