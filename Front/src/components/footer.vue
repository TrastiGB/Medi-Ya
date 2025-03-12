<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 FARMED. Todos los derechos reservados.</p>
        <nav>
          <router-link to="/terminos">Términos y condiciones</router-link>
          <router-link to="/privacidad">Política de privacidad</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </nav>
      </div>
    </footer>
  </template>
  
<script setup lang="ts">
  </script>
  
  <style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.footer {
  background-color: $primary-color;
  color: $color-white;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  margin-top: auto;

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    @include flex-center(row, space-between, center);
  }

  nav {
    display: flex;
    gap: 15px;

    a {
      color: $color-white;
      text-decoration: none;
      font-size: $text-small;
      transition: color 0.3s ease;

      &:hover {
        text-decoration: underline;
        color: darken($color-white, 10%);
      }
    }
  }
}
  </style>
