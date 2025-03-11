import { defineStore } from 'pinia';

export const useProductosStore = defineStore('productos', {
  state: () => ({
    productos: [],
  }),
  actions: {
    async fetchProducts() {
        try {
          const response = await fetch('http://localhost:5000/api/productos');
      
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error en la API: ${response.status} - ${errorText}`);
          }
      
          const data = await response.json();
          console.log("📦 Productos recibidos:", data); // Verifica la imagen aquí
      
          this.productos = data;
        } catch (error) {
          console.error('Error al obtener productos:', error);
        }
      }
  },
});
