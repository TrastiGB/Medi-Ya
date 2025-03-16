<template>
  <section class="higiene">
    <div class="higiene__header">
      <div class="higiene__icon">
        <hygieneicon />
      </div>
      <div class="higiene__content">
        <h1 class="higiene__title">Productos de Higiene</h1>
        <p class="higiene__text">Cuidado personal con productos de calidad.</p>
      </div>
    </div>

    <div class="higiene__list">
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
import hygieneicon from "@/components/hygieneicon.vue";
import { ref } from "vue";

const products = ref([
  { id: 1, name: "Gel de Ducha Neutro", price: "3.99€", image: "@/assets/images/gel-ducha.jpg" },
  { id: 2, name: "Champú Anticaspa", price: "6.99€", image: "@/assets/images/champu.jpg" },
  { id: 3, name: "Desodorante Roll-On", price: "4.50€", image: "@/assets/images/desodorante.jpg" },
]);
</script>


<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.higiene {
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

  &__categories {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }

  &__category {
    padding: 8px 12px;
    border: 1px solid $color-border;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    font-size: $text-small;
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
