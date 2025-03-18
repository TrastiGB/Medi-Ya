<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">&copy; 2024 MEDIYA. Todos los derechos reservados.</p>
      <nav class="footer__nav">
        <router-link to="/terminos" class="footer__link">Términos y condiciones</router-link>
        <router-link to="/privacidad" class="footer__link">Política de privacidad</router-link>
        <router-link to="/contacto" class="footer__link">Contacto</router-link>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.footer {
  background-color: $primary-color;
  color: $color-white;
  text-align: center;
  padding: 15px 0;
  width: 100%;
  margin-top: auto;

  &__container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    @include flex-center(column);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      gap: 15px;
    }
  }

  &__link {
    color: $color-white;
    text-decoration: none;
    font-size: $text-small;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
