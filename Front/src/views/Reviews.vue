<template>
  <div class="reviews-container">
    <h1>Reseñas de Productos</h1>
    <div v-if="loading" class="loading">Cargando reseñas...</div>
    <div v-else>
      <div v-if="Object.keys(reseñas).length" class="review-grid">
        <div v-for="(reviews, productId) in reseñas" :key="productId" class="review-card">
          <h2>Producto ID: {{ productId }}</h2>
          <ul class="review-list">
            <li v-for="(review, index) in reviews" :key="index" class="review-item">
              <p class="review-comment">Valoración:</p>
              <span class="review-rating"> Estrellas {{ review.calificacion }}/5</span>
            </li>
          </ul>
          <p v-if="!reviews.length" class="no-reviews">No hay reseñas aún.</p>

          <!-- Formulario para agregar reseña -->
          <form @submit.prevent="submitReview(productId)" class="review-form">
            <textarea v-model="nuevaReseña[productId].comentario" placeholder="Escribe tu reseña..." required></textarea>
            <select v-model="nuevaReseña[productId].calificacion" required>
              <option v-for="n in 5" :key="n" :value="n">{{ n }} Estrellas</option>
            </select>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <p v-else class="no-reviews">No hay reseñas disponibles.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useProductosStore } from "@/stores/productos";

const store = useProductosStore();
const loading = ref(true);
const reseñas = ref({});
const nuevaReseña = ref({});

const submitReview = async (productId) => {
  const { comentario, calificacion } = nuevaReseña.value[productId];
  await store.addReview(productId, comentario, calificacion);
  nuevaReseña.value[productId] = { comentario: "", calificacion: 5 };
};

onMounted(async () => {
  await store.fetchProducts();
  const productos = store.productos;
  
  for (const producto of productos) {
    await store.fetchReviews(producto.id);
    nuevaReseña.value[producto.id] = { comentario: "", calificacion: 5 };
  }
  
  reseñas.value = store.reseñas;
  loading.value = false;
});
</script>

<style scoped>
.reviews-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
}

.loading {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.review-card {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.review-card h2 {
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
}

.review-list {
  list-style: none;
  padding: 0;
}

.review-item {
  background: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
}

.review-comment {
  font-weight: bold;
}

.review-rating {
  font-weight: bold;
  color: #ff9800;
}

.no-reviews {
  text-align: center;
  font-style: italic;
  color: gray;
}

.review-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

textarea, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #2a9d8f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #21867a;
}
</style>
