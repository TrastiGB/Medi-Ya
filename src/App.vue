<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <main> <!-- article -->
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped lang="scss">
</style>
