<template>
    <div class="oportunidades">
      <section class="oportunidades__info">
        <h1 class="oportunidades__title">Únete a nuestro equipo</h1>
        <p class="oportunidades__text">
          Buscamos personas apasionadas y comprometidas. Si crees que cumples con los requisitos, envíanos tu CV.
        </p>
        <ul class="oportunidades__requisitos">
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Experiencia en el sector
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Trabajo en equipo
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Disponibilidad horaria
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Capacidad de adaptación a cambios
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Proactividad y resolución de problemas
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Conocimientos básicos de informática
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Compromiso y responsabilidad
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Buena comunicación verbal y escrita
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Capacidad de trabajar bajo presión
  </li>
  <li class="oportunidades__requisito">
    <span class="oportunidades__icon">✔️</span> Disponibilidad para formación continua
  </li>
</ul>

      </section>
  
      <section class="oportunidades__form">
        <h2 class="oportunidades__form-title">Envíanos tu CV</h2>
        <form @submit.prevent="submitForm" class="oportunidades__form-container">
          <div class="oportunidades__field">
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" v-model="form.nombre" required />
          </div>
  
          <div class="oportunidades__field">
            <label for="apellido">Apellido</label>
            <input id="apellido" type="text" v-model="form.apellido" required />
          </div>
  
          <div class="oportunidades__field">
            <label for="correo">Correo de contacto</label>
            <input id="correo" type="email" v-model="form.correo" required />
          </div>
  
          <div class="oportunidades__field">
            <label for="cv">Adjuntar CV</label>
            <input id="cv" type="file" @change="handleFileUpload" accept=".pdf,.doc,.docx" />
          </div>
  
          <button type="submit" class="oportunidades__submit">Enviar</button>
        </form>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const form = ref({
    nombre: "",
    apellido: "",
    correo: "",
    cv: null as File | null,
  });
  
  const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      form.value.cv = target.files[0];
    }
  };
  
  const submitForm = () => {
    console.log("Formulario enviado:", form.value);
    alert("Formulario enviado correctamente");
  };
  </script>
  
  <style scoped lang="scss">
  @import "@/assets/styles/pages/oportunidades.scss";
  </style>
  