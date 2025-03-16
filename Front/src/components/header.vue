<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <router-link to="/" class="header__logo-link">
          <logocanvas />
          <div>
            <h1 class="header__title">MediYa</h1>
            <span class="header__subtitle">Somos farmacéuticos</span>
          </div>
        </router-link>
      </div>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><router-link to="/">Categorías</router-link></li>
          <li class="header__nav-item"><router-link to="/medicamentos">Medicamentos</router-link></li>
          <li class="header__nav-item"><router-link to="/oportunidades">Oportunidades</router-link></li>
          <li class="header__nav-item"><router-link to="/blog">Blog</router-link></li>
        </ul>
      </nav>
      <div class="header__actions">
        <router-link to="/login" class="header__login">Iniciar sesión</router-link>
        <button class="header__cart"></button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logocanvas from "@/components/logocanvas.vue";
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.header {
  background-color: $color-white;
  padding: 10px 0;
  @include box-shadow;

  &__container {
    @include container;
    @include flex-center(column);
    
    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  &__title {
    font-size: $title-medium;
    font-weight: bold;
    color: $color-text-dark;
  }

  &__subtitle {
    font-size: $text-small;
    color: $color-text-light;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;

    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      gap: 20px;
    }
  }

  &__nav-item a {
    text-decoration: none;
    font-size: $text-medium;
    color: $color-text-dark;
    transition: color 0.3s ease;

    &:hover {
      color: $primary-color;
    }
  }

  &__actions {
    display: flex;
    gap: 10px;
  }

  &__login {
    @include button-style($primary-color, $color-white);
  }

  &__cart {
    width: 30px;
    height: 30px;
    background-size: cover;
    border: none;
    cursor: pointer;
  }
}
</style>
