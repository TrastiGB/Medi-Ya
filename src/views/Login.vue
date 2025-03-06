
<template>
  <div class="login">
        <div class="login__container">
            <h1 class="login__title">Iniciar Sesión</h1>
            <form class="login__form">
                <div class="login__field">
                    <label for="email" class="login__label">Correo Electrónico</label>
                    <input type="email" id="email" class="login__input" placeholder="Introduce tu correo" required>
                </div>
                <div class="login__field">
                    <label for="password" class="login__label">Contraseña</label>
                    <input type="password" id="password" class="login__input" placeholder="Introduce tu contraseña" required>
                </div>
                <button type="submit" class="login__button">Acceder</button>
                <a href="#" class="login__link">¿Olvidaste tu contraseña?</a>
                <router-link to="/register" class="login__link">Registrarse</router-link>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use '../assets/styles/pages/login.scss' as *;
</style>