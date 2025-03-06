<template>
  <section class="categories">
    <h2>Categorías principales</h2>
    <div class="category-list">
      <categorycard 
        name="Medicamentos"
        icon="@/assets/icons/medicamentos.svg"
        link="/medicamentos"
        bgColor="$secondary-color"
      />
      <categorycard 
        name="Higiene"
        icon="@/assets/icons/higiene.svg"
        link="/higiene"
        bgColor="$background-color"
      />
      <categorycard 
        name="Cosmética"
        icon="@/assets/icons/cosmetica.svg"
        link="/cosmetica"
        bgColor="$primary-color"
      />
      <categorycard 
        name="Nutrición y Dietética"
        icon="@/assets/icons/nutricion.svg"
        link="/nutricion"
        bgColor="$color-border"
      />
    </div>
  </section>

  <section class="featured-products">
    <h2>Productos Destacados</h2>
    <div class="product-list">
      <productcard 
        name="Paracetamol 500mg"
        price="5.99€"
        image="@/assets/images/paracetamol.jpg"
      />
      <productcard 
        name="Crema Hidratante"
        price="12.50€"
        image="@/assets/images/crema.jpg"
      />
      <productcard 
        name="Vitaminas Complejo B"
        price="8.99€"
        image="@/assets/images/vitaminas.jpg"
      />
    </div>
  </section>

  <section class="store-info">
    <div class="container">
      <h2>Sobre FARMED</h2>
      <p>
        En <strong>FARMED</strong> nos especializamos en ofrecer productos farmacéuticos de calidad, 
        con un enfoque en el bienestar y la salud de nuestros clientes. Nuestro compromiso es 
        brindar la mejor atención y un servicio confiable para garantizar tu satisfacción.
      </p>
      <p>
        Descubre nuestra amplia selección de medicamentos, productos de higiene, cosmética y 
        nutrición. ¡Tu bienestar es nuestra prioridad!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import categorycard from '../components/categorycard.vue';
import productcard from '@/components/productcard.vue';
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.categories, .store-info, .featured-products {
    text-align: center;
    padding: 30px 0;
  
    h2 {
      font-size: $title-medium;
      font-weight: bold;
      margin-bottom: 20px;
      color: $primary-color;
    }
}

.category-list, .product-list {
    @include flex-center(row, center, center);
    gap: 20px;
}

.store-info {
    background-color: $background-color;
    padding: 40px 20px;

    .container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    p {
      font-size: $text-medium;
      color: $color-text-light;
      margin-bottom: 15px;
      line-height: 1.6;
    }
}

.featured-products {
    background-color: $color-white;
    padding: 40px 20px;

    .product-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }
}
</style>
