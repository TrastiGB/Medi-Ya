<template>
  <section class="home">
    <h2 class="home__title">Categorías principales</h2>
    <div class="home__categories">
      <categorycard 
        v-for="category in categories" 
        :key="category.name"
        :name="category.name"
        :link="category.link"
        :bgColor="category.bgColor"
      >
        <template #icon>
          <component :is="category.icon" />
        </template>
      </categorycard>
    </div>

    <h2 class="home__title">Productos Destacados</h2>
    <div class="home__products">
      <productcard 
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </div>

    <section class="home__info">
      <div class="home__info-container">
        <h2 class="home__info-title">Sobre MEDIYA</h2>
        <p class="home__info-text">
          En <strong>MEDIYA</strong> nos especializamos en ofrecer productos farmacéuticos de calidad,
          con un enfoque en la salud y el bienestar de nuestros clientes.
        </p>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import categorycard from "@/components/categorycard.vue";
import productcard from "@/components/productcard.vue";
import medicinebottle from "@/components/medicinebottle.vue";
import hygieneicon from "@/components/hygieneicon.vue";
import cosmeticicon from "@/components/cosmeticicon.vue";
import nutritionicon from "@/components/nutritionicon.vue";
import { ref } from "vue";

const categories = ref([
  { name: "Medicamentos", link: "/medicamentos", bgColor: "#A5D6A7", icon: medicinebottle },
  { name: "Higiene", link: "/higiene", bgColor: "#C5E1A5", icon: hygieneicon },
  { name: "Cosmética", link: "/cosmetica", bgColor: "#81C784", icon: cosmeticicon },
  { name: "Nutrición y Dietética", link: "/nutricion", bgColor: "#66BB6A", icon: nutritionicon }
]);

const products = ref([
  { id: 1, name: "Paracetamol 500mg", price: "5.99€", image: "@/assets/images/paracetamol.jpg" },
  { id: 2, name: "Crema Hidratante", price: "12.50€", image: "@/assets/images/crema.jpg" },
  { id: 3, name: "Vitaminas Complejo B", price: "8.99€", image: "@/assets/images/vitaminas.jpg" },
]);
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.home {
  text-align: center;
  padding: $padding-medium;

  &__title {
    font-size: $title-medium;
    font-weight: bold;
    margin-bottom: 20px;
    color: $primary-color;
  }

  &__categories {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  &__products {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__info {
    background-color: $background-color;
    padding: 40px 20px;
    margin-top: 40px;

    &-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    &-title {
      font-size: $title-medium;
      color: $primary-color;
      margin-bottom: 10px;
    }

    &-text {
      font-size: $text-medium;
      color: $color-text-light;
      line-height: 1.6;
    }
  }
}
</style>
