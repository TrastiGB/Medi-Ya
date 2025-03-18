import { defineStore } from "pinia";

export const useProductosStore = defineStore("productos", {
  state: () => ({
    productos: [] as any[],
    reseñas: {} as Record<number, any[]>,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch("http://localhost:5000/api/productos");
        if (!response.ok) throw new Error("Error en la API");
        this.productos = await response.json();
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },
    async fetchReviews(productId: number) {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/${productId}/reviews`);
        if (!response.ok) throw new Error("Error en la API");
        this.reseñas[productId] = await response.json();
      } catch (error) {
        console.error("Error al obtener reseñas:", error);
      }
    },
    async addReview(productId: number, comentario: string, calificacion: number) {
      try {
        const response = await fetch(`http://localhost:5000/api/productos/${productId}/reviews`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comentario, calificacion }),
        });
        if (!response.ok) throw new Error("Error en la API");
        this.fetchReviews(productId);
      } catch (error) {
        console.error("Error al agregar reseña:", error);
      }
    },
  },
});
