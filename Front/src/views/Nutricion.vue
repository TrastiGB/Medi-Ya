<template>
  <section class="nutricion">
    <div class="nutricion__header">
      <div class="nutricion__icon">
        <nutritionicon />
      </div>
      <div class="nutricion__content">
        <h1 class="nutricion__title">Nutrición y Dietética</h1>
        <p class="nutricion__text">Suplementos y vitaminas esenciales para tu bienestar.</p>
      </div>
    </div>

    <div class="nutricion__list">
      <productcard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import productcard from "@/components/productcard.vue";
import nutritionicon from "@/components/nutritionicon.vue";
import { ref } from "vue";

const products = ref([
  { id: 1, name: "Proteína en Polvo", price: "29.99€", image: "@/assets/images/proteina.jpg" },
  { id: 2, name: "Vitaminas Complejo B", price: "8.99€", image: "@/assets/images/vitaminas.jpg" },
  { id: 3, name: "Colágeno Hidrolizado", price: "19.50€", image: "@/assets/images/colageno.jpg" },
]);
</script>


<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.nutricion {
  padding: $padding-medium;
  max-width: 100%;
  margin: 0 auto;

  &__header {
    @include flex-center(column);
    text-align: center;
    margin-bottom: 20px;
  }

  &__icon {
    width: 60px;
    height: 60px;
    background-color: $secondary-color;
    border-radius: 50%;
    @include flex-center;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: $breakpoint-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: $breakpoint-desktop) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
