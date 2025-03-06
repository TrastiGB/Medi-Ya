<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 FARMED. Todos los derechos reservados.</p>
        <nav>
          <router-link to="/terminos">Términos y condiciones</router-link>
          <router-link to="/privacidad">Política de privacidad</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </nav>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped lang="scss">
  @use '@/../../assets/styles/components/footer.scss' as *;
  </style>
  