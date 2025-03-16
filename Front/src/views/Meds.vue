<template>
  <section class="meds">
    <div class="meds__header">
      <div class="meds__icon">
        <medicinebottle />
      </div>
      <div class="meds__content">
        <h1 class="meds__title">Medicamentos sin Receta</h1>
        <p class="meds__text">
          Encuentra medicamentos OTC de venta libre con la garantía de MediYa.
        </p>
      </div>
    </div>

    <div class="meds__list">
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
import medicinebottle from "@/components/medicinebottle.vue";
import { ref } from "vue";

const products = ref([
  { id: 1, name: "Ibuprofeno 400mg", price: "5.50€", image: "@/assets/images/ibuprofeno.jpg" },
  { id: 2, name: "Paracetamol 500mg", price: "4.99€", image: "@/assets/images/paracetamol.jpg" },
  { id: 3, name: "Frenadol Forte", price: "6.99€", image: "@/assets/images/frenadol.jpg" },
]);
</script>


<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.meds {
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
