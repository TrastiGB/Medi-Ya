<template>
  <div class="product-list">
    <div v-for="producto in productosStore.productos" :key="producto.id" class="product-card">
      <img :src="getImageUrl(producto.imagen)" :alt="producto.nombre" />
      <h3>{{ producto.nombre }}</h3>
      <p class="price">{{ producto.precio }} €</p>
      <button>Ver más</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductosStore } from "@/stores/productos";
import ibuprofenoImage from "@/assets/images/ibuprofeno.jpg"; // Importamos la imagen local

const productosStore = useProductosStore();

onMounted(() => {
  productosStore.fetchProducts();
});

// Función para obtener la URL correcta de la imagen
const getImageUrl = (imageName: string | null) => {
  if (!imageName || imageName.startsWith("https://example.com")) {
    console.warn("⚠️ Imagen incorrecta, usando imagen local.");
    return ibuprofenoImage; // Carga la imagen local
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
  gap: 20px;
  justify-content: center;
}

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
