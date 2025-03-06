<template>
  <section class="meds-page">
    <!-- Encabezado de la sección -->
    <div class="meds-header">
      <div class="icon">
        <img src="" alt="Medicamentos" />
      </div>
      <div class="header-content">
        <h1>Comprar medicamentos sin receta</h1>
        <p>
          También conocidos como fármacos OTC o de venta libre, los medicamentos sin receta son aquellos que se pueden adquirir sin necesidad de prescripción médica, 
          y pueden comprarse en farmacias online como físicas. <strong>Únicamente debes asegurarte de que el sitio web donde estás comprando cuente con la verificación legal.</strong>
        </p>
      </div>
    </div>

    <!-- Categorías de medicamentos -->
    <div class="meds-categories">
      <button v-for="category in categories" :key="category">{{ category }}</button>
    </div>

    <!-- Filtros -->
    <div class="meds-filters">
      <div class="filter-section" v-for="brand in brands" :key="brand.name">
        <h3>Marca</h3>
        <input type="checkbox" :id="brand.name" />
        <label :for="brand.name">{{ brand.name }} ({{ brand.count }})</label>
      </div>
      
      <div class="filter-section" v-for="filter in moreFilters" :key="filter">
        <h3>Más filtros</h3>
        <input type="checkbox" :id="filter" />
        <label :for="filter">{{ filter }}</label>
      </div>
    </div>

    <!-- Ordenar por -->
    <div class="meds-sort">
      <label for="sort">Ordenar por</label>
      <select id="sort">
        <option>Características</option>
        <option>Precio</option>
        <option>Más vendidos</option>
      </select>
    </div>

    <!-- Lista de productos -->
    <div class="meds-list">
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
import productcard from '@/components/productcard.vue';
import { ref } from 'vue';

const categories = ref([
  "Alergias", "Antiinflamatorios y analgésicos", "Bucal y garganta", "Capilar", 
  "Dejar de fumar", "Ginecológicos", "Homeopatía", "Oído", "Ojo", "Piel", 
  "Resfriados y gripe", "Sistema circulatorio", "Sistema digestivo", "Sistema nervioso"
]);

const brands = ref([
  { name: "A. Vogel", count: 10 },
  { name: "Aero-red", count: 4 },
  { name: "Alcomon", count: 2 },
  { name: "All test", count: 10 },
  { name: "Almax", count: 11 }
]);

const moreFilters = ref(["Envío rápido (19)", "Oportunidades (1)", "Pack (22)"]);

const products = ref([
  { id: 1, name: "Algesal Espuma Aerosol 100gr", price: "12.99€", image: "@/assets/images/algesal.jpg" },
  { id: 2, name: "Reflex Gel, 50 gramos", price: "8.50€", image: "@/assets/images/reflex.jpg" },
  { id: 3, name: "Frenadol Forte Granulado, 10 Sobres", price: "6.99€", image: "@/assets/images/frenadol.jpg" },
  { id: 4, name: "Frenadol Junior, 10 Sobres", price: "5.50€", image: "@/assets/images/frenadol-junior.jpg" }
]);
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.meds-page {
  padding: 24px;
  max-width: 100%;
  margin: 0 auto;
}

.meds-header {
  @include flex-center(row, flex-start, center);
  gap: 16px;
  margin-bottom: 24px;

  .icon {
    width: 60px;
    height: 60px;
    background-color: $secondary-color;
    border-radius: 50%;
    @include flex-center;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .header-content {
    h1 {
      font-size: $title-medium;
      font-weight: bold;
    }

    p {
      font-size: $text-medium;
      color: $color-text-light;
      margin-top: 8px;
    }
  }
}

.meds-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  button {
    padding: 8px 12px;
    border: 1px solid $color-border;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    font-size: $text-small;
  }
}

.meds-filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
}

.meds-sort {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;  
}

.meds-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}
</style>
