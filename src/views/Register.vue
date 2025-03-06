<template>
    <div class="register">
      <div class="register__container">
        <h1 class="register__title">Crear Cuenta</h1>
        <form class="register__form">
          <div class="register__field" v-for="(campo, key) in form" :key="key">
            <label :for="key" class="register__label">{{ campo.label }}</label>
            <input :id="key" :type="campo.type" v-model="campo.value" :required="campo.required" class="register__input" />
          </div>
          <button type="submit" class="register__button">Registrarse</button>
          <router-link to="/login" class="register__link">¿Ya tienes cuenta? Inicia sesión</router-link>
        </form>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: { label: "Nombre", type: "text", value: "", required: true },
  surname: { label: "Apellidos", type: "text", value: "", required: true },
  email: { label: "Correo Electrónico", type: "email", value: "", required: true },
  password: { label: "Contraseña", type: "password", value: "", required: true },
  confirmPassword: { label: "Confirmar Contraseña", type: "password", value: "", required: true }
});
</script>
  
<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.register {
  @include flex-center;
  height: 100vh;
  background-color: $background-color;

  &__container {
    background: $color-white;
    padding: 32px;
    border-radius: $border-radius;
    @include box-shadow;
    width: 100%;
    max-width: 400px;
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
    gap: 16px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__label {
    font-size: $text-small;
    color: $color-text-light;
    margin-bottom: 8px;
    width: 100%;
    text-align: left;
  }

  &__input {
    width: 100%;
    padding: 12px;
    border: 1px solid $color-border;
    border-radius: $border-radius;
    font-size: $text-medium;
  }

  &__button {
    @include button-style;
    width: 100%;
    padding: 12px;
  }

  &__link {
    display: block;
    margin-top: 16px;
    font-size: $text-medium;
    color: $primary-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
