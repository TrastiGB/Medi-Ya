<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo__link">
          <logocanvas />
          <div>
            <h1>MediYa</h1>
            <span>Somos farmacéuticos</span>
          </div>
        </router-link>
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">Categorías</router-link></li>
          <li><router-link to="/medicamentos">Medicamentos</router-link></li>
          <li><router-link to="/novedades">Novedades</router-link></li>
          <li><router-link to="/oportunidades">Oportunidades</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
        </ul>
      </nav>
      <div class="actions">
        <router-link to="/login" class="login">Iniciar sesión</router-link>
        <button class="cart"></button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logocanvas from "@/components/Logocanvas.vue";
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.header {
  background-color: $color-white;
  padding: 15px 0;
  @include box-shadow;

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    @include flex-center(row, space-between, center);
  }

  .logo {
    @include flex-center(row, flex-start, center);
    gap: 10px;

    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: inherit;
    }

    h1 {
      font-size: $title-large;
      font-weight: bold;
      color: $color-text-dark;
      margin: 0;
    }

    span {
      font-size: $text-small;
      color: $color-text-light;
    }
  }

  .nav {
    ul {
      list-style: none;
      display: flex;
      gap: 20px;
      padding: 0;
      margin: 0;
      flex-grow: 1;

      li {
        a {
          text-decoration: none;
          font-size: $text-medium;
          color: $color-text-dark;
          transition: color 0.3s ease;

          &:hover {
            color: $primary-color;
          }
        }
      }
    }
  }

  .actions {
    @include flex-center(row, flex-start, center);
    gap: 15px;

    .login {
      @include button-style($primary-color, $color-white);
    }

    .cart {
      width: 30px;
      height: 30px;
      background-size: cover;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
