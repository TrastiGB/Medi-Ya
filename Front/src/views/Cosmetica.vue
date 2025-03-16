<template>
  <section class="cosmetica">
    <div class="cosmetica__header">
      <div class="cosmetica__icon">
        <cosmeticicon />
      </div>
      <div class="cosmetica__content">
        <h1 class="cosmetica__title">Cosmética</h1>
        <p class="cosmetica__text">Cuidado facial y corporal con productos dermatológicos.</p>
      </div>
    </div>

    <div class="cosmetica__list">
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
import cosmeticicon from "@/components/cosmeticicon.vue";
import { ref } from "vue";

const products = ref([
  { id: 1, name: "Crema Hidratante", price: "14.99€", image: "@/assets/images/crema.jpg" },
  { id: 2, name: "Serum Facial Anti-Edad", price: "24.99€", image: "@/assets/images/serum.jpg" },
  { id: 3, name: "Protector Solar FPS50", price: "19.99€", image: "@/assets/images/protector.jpg" },
]);
</script>


<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.cosmetica {
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
