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
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.product-card {
    background: $color-white;
    padding: 15px;
    border-radius: $border-radius;
    @include box-shadow;
    text-align: center;
    width: 180px;
  
    img {
      @include responsive-img;
      border-radius: $border-radius;
    }
  
    h3 {
      font-size: $text-medium;
      margin: 10px 0;
    }
  
    .price {
      font-size: $text-small;
      font-weight: bold;
      color: $primary-color;
    }
  
    button {
      margin-top: 10px;
      @include button-style($primary-color, $color-white);
    }
}
</style>
