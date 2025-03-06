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
      <div class="filter-section">
        <h3>Marca</h3>
        <div v-for="brand in brands" :key="brand.name">
          <input type="checkbox" :id="brand.name" />
          <label :for="brand.name">{{ brand.name }} ({{ brand.count }})</label>
        </div>
      </div>

      <div class="filter-section">
        <h3>Más filtros</h3>
        <div v-for="filter in moreFilters" :key="filter">
          <input type="checkbox" :id="filter" />
          <label :for="filter">{{ filter }}</label>
        </div>
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

const categories = [
  "Alergias", "Antiinflamatorios y analgésicos", "Bucal y garganta", "Capilar", 
  "Dejar de fumar", "Ginecológicos", "Homeopatía", "Oído", "Ojo", "Piel", 
  "Resfriados y gripe", "Sistema circulatorio", "Sistema digestivo", "Sistema nervioso"
];

const brands = [
  { name: "A. Vogel", count: 10 },
  { name: "Aero-red", count: 4 },
  { name: "Alcomon", count: 2 },
  { name: "All test", count: 10 },
  { name: "Almax", count: 11 }
];

const moreFilters = ["Envío rápido (19)", "Oportunidades (1)", "Pack (22)"];

const products = [
  { id: 1, name: "Algesal Espuma Aerosol 100gr", price: "12.99€", image: "@/assets/images/algesal.jpg" },
  { id: 2, name: "Reflex Gel, 50 gramos", price: "8.50€", image: "@/assets/images/reflex.jpg" },
  { id: 3, name: "Frenadol Forte Granulado, 10 Sobres", price: "6.99€", image: "@/assets/images/frenadol.jpg" },
  { id: 4, name: "Frenadol Junior, 10 Sobres", price: "5.50€", image: "@/assets/images/frenadol-junior.jpg" }
];
</script>

<style scoped lang="scss">
@use '@/assets/styles/pages/meds.scss' as *;
</style>
