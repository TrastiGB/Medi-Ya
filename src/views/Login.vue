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
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.login {
  @include flex-center;
  width: 100%;
  height: 100vh;
  background-color: $background-color;

  &__container {
    width: 90%;
    max-width: 400px;
    background: $color-white;
    padding: 32px;
    border-radius: $border-radius;
    @include box-shadow;
    text-align: center;
  }

  &__title {
    font-size: $title-medium;
    margin-bottom: 24px;
    color: $primary-color;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__label {
    font-size: $text-small;
    margin-bottom: 8px;
    text-align: left;
    color: $color-text-light;
  }

  &__input {
    padding: 12px;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    font-size: $text-medium;
    transition: border 0.3s;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }

  &__button {
    @include button-style;
    padding: 12px;
    font-size: $text-medium;
  }

  &__link {
    margin-top: 16px;
    display: block;
    font-size: $text-medium;
    color: $primary-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>