<template>
    <div class="product-card">
      <img :src="image" :alt="name" />
      <h3>{{ name }}</h3>
      <p class="price">{{ price }}</p>
      <button>Ver más</button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    name: string;
    price: string;
    image: string;
  }>();
  </script>
  
  <style scoped lang="scss">
  @use '@../../../assets/styles/components/productcard.scss' as *;
  </style>
  