<template>
  <div class="oportunidades">
    <section class="oportunidades__info">
      <h1 class="oportunidades__title">Únete a Nuestro Equipo</h1>
      <p class="oportunidades__text">
        Buscamos personas apasionadas y comprometidas. Envíanos tu CV.
      </p>
    </section>

    <section class="oportunidades__form">
      <h2 class="oportunidades__form-title">Envíanos tu CV</h2>
      <form @submit.prevent="submitForm" class="oportunidades__form-container">
        <div class="oportunidades__field" v-for="(campo, key) in form" :key="key">
          <label :for="key" class="oportunidades__label">{{ campo.label }}</label>
          <input :id="key" :type="campo.type" v-model="campo.value" class="oportunidades__input" />
        </div>
        <button type="submit" class="oportunidades__button">Enviar</button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  nombre: { label: "Nombre", type: "text", value: "" },
  correo: { label: "Correo", type: "email", value: "" },
  cv: { label: "Adjuntar CV", type: "file", value: "" }
});

const submitForm = () => {
  alert("Formulario enviado correctamente");
};
</script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.oportunidades {
  padding: $padding-medium;
  text-align: center;

  &__title {
    font-size: $title-medium;
    color: $primary-color;
  }

  &__text {
    font-size: $text-medium;
    color: $color-text-dark;
  }

  &__form {
    background: $background-color;
    padding: $padding-medium;
    border-radius: $border-radius;
    @include box-shadow;
  }

  &__form-container {
    display: flex;
    flex-direction: column;
  }

  &__field {
    margin-bottom: 15px;

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid $color-border;
      border-radius: $border-radius;
      font-size: $text-medium;
    }
  }

  &__button {
    @include button-style;
    width: 100%;
  }
}
</style>
