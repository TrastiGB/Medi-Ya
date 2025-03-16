<template>
  <div class="product-list">
    <div v-for="producto in productosStore.productos" :key="producto.id" class="product-card">
      <img :src="getImageUrl(producto.imagen)" :alt="producto.nombre" class="product-card__image" />
      <h3 class="product-card__title">{{ producto.nombre }}</h3>
      <p class="product-card__price">{{ producto.precio }} €</p>
      <button class="product-card__button">Ver más</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductosStore } from "@/stores/productos";
import ibuprofenoImage from "@/assets/images/ibuprofeno.jpg"; // Imagen por defecto

const productosStore = useProductosStore();

onMounted(() => {
  productosStore.fetchProducts();
});

// Función para obtener la URL correcta de la imagen
const getImageUrl = (imageName: string | null) => {
  if (!imageName || imageName.startsWith("https://example.com")) {
    console.warn("Imagen no encontrada, usando imagen por defecto");
    return ibuprofenoImage;
  }
  return `http://localhost:5000/uploads/${imageName}`;
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding: $padding-small;

  @media (min-width: $breakpoint-tablet) {
    gap: 20px;
    padding: $padding-medium;
  }
}

.product-card {
  background: $color-white;
  padding: $padding-small;
  border-radius: $border-radius;
  @include box-shadow;
  text-align: center;
  width: 150px;

  @media (min-width: $breakpoint-tablet) {
    width: 180px;
  }

  &__image {
    @include responsive-img;
    border-radius: $border-radius;
  }

  &__title {
    font-size: $text-small;
    margin: 8px 0;
    font-weight: bold;

    @media (min-width: $breakpoint-tablet) {
      font-size: $text-medium;
    }
  }

  &__price {
    font-size: $text-small;
    font-weight: bold;
    color: $primary-color;
  }

  &__button {
    margin-top: 8px;
    @include button-style($primary-color, $color-white);
  }
}
</style>
