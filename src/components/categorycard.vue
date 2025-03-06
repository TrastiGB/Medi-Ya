<template>
    <div class="category-card">
      <router-link :to="link">
        <div class="icon" :style="{ backgroundColor: bgColor }">
          <img :src="icon" :alt="name" />
        </div>
        <h3>{{ name }}</h3>
        <div class="underline"></div>
      </router-link>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    name: string;
    icon: string;
    link: string;
    bgColor: string;
  }>();
  </script>
  
  <style scoped lang="scss">
  @use '@/../../assets/styles/components/categorycard.scss' as *;
  </style>
  