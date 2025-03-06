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
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.category-card {
  text-align: center;
  width: 120px;

  a {
    text-decoration: none;
    color: inherit;
    @include flex-center(column);
  }

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    @include flex-center;

    img {
      width: 28px;
      height: 28px;
    }
  }

  h3 {
    font-size: $text-medium;
    margin: 8px 0;
    font-weight: 600;
  }

  .underline {
    width: 30px;
    height: 2px;
    background-color: $color-border;
    margin-top: 4px;
  }
}
</style>
