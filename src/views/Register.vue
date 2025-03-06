<template>
    <div class="register">
      <div class="register__container">
        <h1 class="register__title">Crear Cuenta</h1>
        <form class="register__form">
          <div class="register__field">
            <label for="name" class="register__label">Nombre</label>
            <input type="text" id="name" class="register__input" placeholder="Introduce tu nombre" required>
          </div>
          <div class="register__field">
            <label for="surname" class="register__label">Apellidos</label>
            <input type="text" id="surname" class="register__input" placeholder="Introduce tus apellidos" required>
          </div>
          <div class="register__field">
            <label for="email" class="register__label">Correo Electrónico</label>
            <input type="email" id="email" class="register__input" placeholder="Introduce tu correo" required>
          </div>
          <div class="register__field">
            <label for="password" class="register__label">Contraseña</label>
            <input type="password" id="password" class="register__input" placeholder="Introduce tu contraseña" required>
          </div>
          <div class="register__field">
            <label for="confirm-password" class="register__label">Confirmar Contraseña</label>
            <input type="password" id="confirm-password" class="register__input" placeholder="Repite tu contraseña" required>
          </div>
          <button type="submit" class="register__button">Registrarse</button>
          <router-link to="/login" class="register__link">¿Ya tienes cuenta? Inicia sesión</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped lang="scss">
  @use '../assets/styles/pages/register.scss' as *;
  </style>
  