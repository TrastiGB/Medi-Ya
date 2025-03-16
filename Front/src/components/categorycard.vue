<template>
  <div class="category-card">
    <router-link :to="link" class="category-card__link">
      <div class="category-card__icon" :style="{ backgroundColor: bgColor }">
        <slot name="icon">
          <img v-if="icon" :src="icon" :alt="name" />
        </slot>
      </div>
      <h3 class="category-card__title">{{ name }}</h3>
      <div class="category-card__underline"></div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  name: string; 
  icon?: string;  
  link: string; 
  bgColor: string; 
}>();
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.category-card {
  text-align: center;
  width: 100px;

  &__link {
    text-decoration: none;
    color: inherit;
    @include flex-center(column);
  }

  &__icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    @include flex-center;

    img, svg {
      width: 40px;
      height: 40px;
    }
  }

  &__title {
    font-size: $text-medium;
    margin: 8px 0;
    font-weight: 600;
  }

  &__underline {
    width: 30px;
    height: 2px;
    background-color: $color-border;
    margin-top: 4px;
  }
}
</style>
