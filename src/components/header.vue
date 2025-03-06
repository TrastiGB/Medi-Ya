<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/" class="logo__link">
          <img src="/src/assets/images/1.png" alt="VOLUNMED Logo" class="logo__image" />
          <div>
            <h1>FARMED</h1>
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
</script>

<style scoped lang="scss">
@use '@/../../assets/styles/components/header.scss' as *;

.logo__link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.logo__image {
  cursor: pointer;
}
</style>
