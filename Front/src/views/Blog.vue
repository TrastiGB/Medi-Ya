<template>
    <div class="about">
      <div class="about__container">
        <h1 class="about__title">Quiénes Somos</h1>
        <p class="about__description">
          En <strong>Farmed</strong>, nos dedicamos a garantizar y suministrar medicamentos a través de nuestra 
          <strong>tienda online</strong>, enfocándonos en aquellas personas con dificultades de movilidad, ya sea por 
          una <strong>urgencia inmediata</strong> o por <strong>comodidad</strong>.
        </p>
        <div class="about__content">
          <div class="about__section">
            <h2 class="about__subtitle">Nuestra Misión</h2>
            <p class="about__text">
              Nuestro objetivo es proporcionar un servicio <strong>rápido, seguro y accesible</strong> de venta de 
              medicamentos online, asegurando que cada paciente reciba lo que necesita sin salir de casa.
            </p>
          </div>
          <div class="about__section">
            <h2 class="about__subtitle">¿Cómo Funciona?</h2>
            <ul class="about__list">
              <li class="about__item">Explora nuestra tienda y encuentra los medicamentos que necesitas.</li>
              <li class="about__item">Realiza tu pedido de forma sencilla y segura.</li>
              <li class="about__item">Recibe los medicamentos en la puerta de tu hogar con entrega rápida.</li>
            </ul>
          </div>
          <div class="about__section">
            <h2 class="about__subtitle">Compromiso con la Salud</h2>
            <p class="about__text">
              En <strong>Farmed</strong>, trabajamos con farmacias autorizadas para garantizar la calidad y seguridad 
              de cada medicamento, cumpliendo con todas las regulaciones sanitarias vigentes.
            </p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
</script>
  
<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.about {
    @include flex-center(column);
    height: auto;
    padding: 64px 24px;
    background-color: $background-color;
  
    &__container {
      background: $color-white;
      padding: 48px;
      border-radius: $border-radius;
      @include box-shadow;
      width: 100%;
      max-width: 800px;
      text-align: center;
    }
  
    &__title {
      font-size: $title-large;
      margin-bottom: 16px;
      color: $primary-color;
    }
  
    &__description {
      font-size: $text-large;
      color: $color-text-dark;
      margin-bottom: 32px;
    }
  
    &__content {
      text-align: left;
    }
  
    &__section {
      margin-bottom: 32px;
    }
  
    &__subtitle {
      font-size: $title-medium;
      color: $primary-color;
      margin-bottom: 8px;
    }
  
    &__text {
      font-size: $text-medium;
      color: $color-text-light;
    }
  
    &__list {
      list-style: none;
      padding: 0;
    }
  
    &__item {
      font-size: $text-medium;
      color: $color-text-dark;
      margin-bottom: 8px;
      position: relative;
      padding-left: 24px;
  
      &::before {
        content: "✔";
        position: absolute;
        left: 0;
        color: $primary-color;
        font-weight: bold;
      }
    }
}
</style>
