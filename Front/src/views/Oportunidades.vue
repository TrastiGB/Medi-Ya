<template>
    <div class="oportunidades">
      <section class="oportunidades__info">
        <h1 class="oportunidades__title">Únete a nuestro equipo</h1>
        <p class="oportunidades__text">
          Buscamos personas apasionadas y comprometidas. Si crees que cumples con los requisitos, envíanos tu CV.
        </p>
        <ul class="oportunidades__requisitos">
          <li class="oportunidades__requisito" v-for="(requisito, index) in requisitos" :key="index">
            <span class="oportunidades__icon">✔️</span> {{ requisito }}
          </li>
        </ul>
      </section>
  
      <section class="oportunidades__form">
        <h2 class="oportunidades__form-title">Envíanos tu CV</h2>
        <form @submit.prevent="submitForm" class="oportunidades__form-container">
          <div class="oportunidades__field" v-for="(campo, key) in form" :key="key">
            <label :for="key">{{ campo.label }}</label>
            <input :id="key" :type="campo.type" v-model="campo.value" :required="campo.required" />
          </div>
          <button type="submit" class="oportunidades__submit">Enviar</button>
        </form>
      </section>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

const requisitos = ref([
  "Experiencia en el sector",
  "Trabajo en equipo",
  "Disponibilidad horaria",
  "Capacidad de adaptación a cambios",
  "Proactividad y resolución de problemas",
  "Conocimientos básicos de informática",
  "Compromiso y responsabilidad",
  "Buena comunicación verbal y escrita",
  "Capacidad de trabajar bajo presión",
  "Disponibilidad para formación continua"
]);

const form = ref({
  nombre: { label: "Nombre", type: "text", value: "", required: true },
  apellido: { label: "Apellido", type: "text", value: "", required: true },
  correo: { label: "Correo de contacto", type: "email", value: "", required: true },
  cv: { label: "Adjuntar CV", type: "file", value: "", required: false }
});

const submitForm = () => {
  console.log("Formulario enviado:", form.value);
  alert("Formulario enviado correctamente");
};
</script>
  
<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.oportunidades {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  
    &__title {
      font-size: $title-medium;
      font-weight: bold;
    }
  
    &__text {
      font-size: $text-medium;
      margin: 10px 0;
    }
  
    &__requisitos {
      list-style: none;
      padding: 0;
    }
  
    &__requisito {
      display: flex;
      align-items: center;
      margin: 8px 0;
      font-size: $text-medium;
    }
  
    &__icon {
      margin-right: 8px;
    }
  
    &__form {
      background: $background-color;
      padding: 20px;
      border-radius: $border-radius;
      @include box-shadow;
    }
  
    &__form-title {
      font-size: $title-small;
      margin-bottom: 15px;
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
  
    &__submit {
      @include button-style;
      width: 100%;
    }
}
</style>
