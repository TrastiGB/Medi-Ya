<template>
  <div class="blog">
    <div class="blog__container">
      <h1 class="blog__title">Quiénes Somos</h1>
      <p class="blog__description">
        En <strong>MediYa</strong>, garantizamos la entrega de medicamentos a domicilio para facilitar el acceso a la salud.
      </p>
      <div class="blog__content">
        <div class="blog__section">
          <h2 class="blog__subtitle">Nuestra Misión</h2>
          <p class="blog__text">
            Brindar un servicio <strong>rápido, seguro y accesible</strong> de venta de medicamentos online.
          </p>
        </div>
        <div class="blog__section">
          <h2 class="blog__subtitle">¿Cómo Funciona?</h2>
          <ul class="blog__list">
            <li class="blog__item">Explora nuestra tienda.</li>
            <li class="blog__item">Realiza tu pedido de forma sencilla y segura.</li>
            <li class="blog__item">Recibe los medicamentos en casa con entrega rápida.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as *;
@use "@/assets/styles/_mixins.scss" as *;

.blog {
  @include flex-center(column);
  padding: $padding-medium;
  background-color: $background-color;

  &__container {
    width: 100%;
    max-width: 800px;
    background: $color-white;
    padding: $padding-medium;
    border-radius: $border-radius;
    text-align: center;
    @include box-shadow;
  }

  &__title {
    font-size: $title-medium;
    color: $primary-color;
  }

  &__description {
    font-size: $text-medium;
    color: $color-text-dark;
  }

  &__content {
    text-align: left;
    margin-top: 20px;
  }

  &__list {
    list-style: none;
    padding: 0;
  }

  &__item {
    position: relative;
    padding-left: 20px;
    font-size: $text-medium;
    color: $color-text-dark;

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
