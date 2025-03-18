<template>
  <div class="register">
    <div class="register__container">
      <h1 class="register__title">Crear Cuenta</h1>
      <form @submit.prevent="registerUser" class="register__form">
        <div class="register__field">
          <label for="nombre" class="register__label">Nombre</label>
          <input v-model="nombre" type="text" id="nombre" required class="register__input" />
        </div>
        <div class="register__field">
          <label for="email" class="register__label">Correo Electrónico</label>
          <input v-model="email" type="email" id="email" required class="register__input" />
        </div>
        <div class="register__field">
          <label for="password" class="register__label">Contraseña</label>
          <input v-model="password" type="password" id="password" required class="register__input" />
        </div>
        <button type="submit" class="register__button">Registrarse</button>
        <router-link to="/login" class="register__link">¿Ya tienes cuenta? Inicia sesión</router-link>
      </form>
      <p v-if="errorMessage" class="register__message register__message--error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="register__message register__message--success">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsuariosStore } from "@/stores/usuarios";

const usuariosStore = useUsuariosStore();
const nombre = ref("");
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const registerUser = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!nombre.value || !email.value || !password.value) {
    errorMessage.value = "Todos los campos son obligatorios.";
    return;
  }

  try {
    const response = await usuariosStore.registerUser({
      nombre: nombre.value,
      email: email.value,
      password: password.value,
    });

    if (response && response.message) {
      successMessage.value = response.message;
      nombre.value = "";
      email.value = "";
      password.value = "";
    } else {
      throw new Error("No se pudo registrar el usuario.");
    }
  } catch (error) {
    errorMessage.value = error.message || "Error al registrar usuario.";
    console.error("Error durante el registro:", error);
  }
};
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
    width: 90%;
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

  &__message {
    margin-top: 10px;
    font-size: $text-small;
    &--error {
      color: red;
    }
    &--success {
      color: green;
    }
  }
}
</style>
