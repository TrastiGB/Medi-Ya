<template>
  <canvas ref="canvasElement" class="logo-canvas"></canvas>
</template>

<script setup lang="ts">

import { onMounted, ref, nextTick } from "vue";

const canvasElement = ref(null);

onMounted(async () => {
  await nextTick();

  const canvas = canvasElement.value;
  if (!canvas) {
    console.error("❌ Error: Canvas not found in the DOM.");
    return;
  }

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    console.error("❌ Error: Unable to get 2D context from Canvas.");
    return;
  }

  // **Set canvas size**
  canvas.width = 100;
  canvas.height = 100;

  function drawLogo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // **Upper Left Curved Part (Dark Green)**
    ctx.fillStyle = "#00732F";
    ctx.beginPath();
    ctx.moveTo(30, 30);
    ctx.quadraticCurveTo(50, 5, 70, 30);
    ctx.lineTo(70, 60);
    ctx.lineTo(30, 60);
    ctx.fill();

    // **Lower Right Curved Part (Light Green)**
    ctx.fillStyle = "#A4D65E";
    ctx.beginPath();
    ctx.moveTo(70, 70);
    ctx.quadraticCurveTo(50, 95, 30, 70);
    ctx.lineTo(30, 60);
    ctx.lineTo(70, 60);
    ctx.fill();
  }

  drawLogo();
});

</script>

<style scoped>
.logo-canvas {
  display: block;
  width: 50px; /* Adjusted for better fit */
  height: 50px;
  background-color: transparent;
}
</style>
