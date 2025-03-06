<template>
    <div class="novedades">
      <div class="novedades__container">
        <h1 class="novedades__title">Novedades</h1>
        <p class="novedades__description">
          Descubre los productos más recientes y destacados de nuestra tienda. Cada uno seleccionado para ofrecerte la mejor calidad y experiencia.
        </p>
        <div class="novedades__content">
          <div v-for="(item, index) in novedades" :key="index" class="novedades__cajetilla">
            <div class="novedades__caja">
              <img :src="item.imagen" :alt="item.nombre" class="novedades__imagen" />
              <div class="novedades__info">
                <h3 class="novedades__nombre">{{ item.nombre }}</h3>
                <p class="novedades__descripcion">{{ item.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const novedades = ref([
    { nombre: 'Producto 1', imagen: 'https://plus.unsplash.com/premium_photo-1672163163579-e5d4aedd26af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNpbmFzfGVufDB8fDB8fHww', descripcion: 'Descripción del producto 1' },
    { nombre: 'Producto 2', imagen: 'https://www.shutterstock.com/image-photo/variety-medicines-drugsmedicine-healthcare-concept-260nw-2505906047.jpg', descripcion: 'Descripción del producto 2' },
    { nombre: 'Producto 3', imagen: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/177B/production/_97211060_capture.jpg.webp', descripcion: 'Descripción del producto 3' },
    { nombre: 'Producto 4', imagen: 'https://www.natruly.com/cdn/shop/collections/cremas.jpg?v=1712256467&width=3200', descripcion: 'Descripción del producto 4' },
    { nombre: 'Producto 5', imagen: 'https://www.samparfums.es/blog/wp-content/uploads/2023/12/crema-aceite-locion-corporal.webp', descripcion: 'Descripción del producto 5' },
    { nombre: 'Producto 6', imagen: 'https://info.mercadona.es/img-cont/es/cremas-de-manos-deliplus--mov.jpg', descripcion: 'Descripción del producto 6' }
  ]);
  </script>
  
  <style scoped lang="scss">
  @use '../assets/styles/pages/novedades.scss' as *;
  </style>
  