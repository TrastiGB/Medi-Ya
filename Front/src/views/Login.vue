<template>
  <div class="login">
    <div class="login__container">
      <h1 class="login__title">Iniciar Sesión</h1>
      <form @submit.prevent="loginUser" class="login__form">
        <div class="login__field">
          <label for="email" class="login__label">Correo Electrónico</label>
          <input v-model="email" type="email" id="email" required class="login__input" />
        </div>
        <div class="login__field">
          <label for="password" class="login__label">Contraseña</label>
          <input v-model="password" type="password" id="password" required class="login__input" />
        </div>
        <button type="submit" class="login__button">Acceder</button>
        <router-link to="/register" class="login__link">Registrarse</router-link>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsuariosStore } from "@/stores/usuarios";

const usuariosStore = useUsuariosStore();
const email = ref("");
const password = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const loginUser = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!email.value || !password.value) {
    errorMessage.value = "⚠️ Todos los campos son obligatorios.";
    return;
  }

  try {
    console.log("📩 Enviando credenciales al backend:", { email: email.value, password: password.value });

    const response = await usuariosStore.loginUser({
      email: email.value,
      password: password.value,
    });

    if (response && response.message) {
      successMessage.value = "✅ Inicio de sesión exitoso. Redirigiendo...";
      setTimeout(() => {
        window.location.href = "/"; // Redirigir a home o dashboard
      }, 2000);
    } else {
      throw new Error("Credenciales incorrectas.");
    }
  } catch (error) {
    errorMessage.value = "❌ Usuario o contraseña incorrectos.";
    console.error(error);
  }
};
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