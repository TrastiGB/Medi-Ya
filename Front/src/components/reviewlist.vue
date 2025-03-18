<template>
  <div class="review-container">
    <h2>Reseñas</h2>
    <ul v-if="reseñas.length" class="review-list">
      <li v-for="(review, index) in reseñas" :key="index" class="review-item">
        <p class="review-comment">{{ review.comentario }}</p>
        <span class="review-rating">⭐ {{ review.calificacion }}/5</span>
      </li>
    </ul>
    <p v-else class="no-reviews">No hay reseñas disponibles.</p>

    <form @submit.prevent="submitReview" class="review-form">
      <textarea v-model="nuevaReseña.comentario" placeholder="Escribe tu reseña..." required></textarea>
      <input type="number" v-model="nuevaReseña.calificacion" min="1" max="5" required />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useProductosStore } from "@/stores/productos";

const props = defineProps({ productId: Number });
const store = useProductosStore();
const reseñas = ref([]);

const nuevaReseña = ref({ comentario: "", calificacion: 5 });

const submitReview = () => {
  store.addReview(props.productId, nuevaReseña.value.comentario, nuevaReseña.value.calificacion);
  nuevaReseña.value.comentario = "";
  nuevaReseña.value.calificacion = 5;
};

onMounted(() => {
  store.fetchReviews(props.productId);
  reseñas.value = store.reseñas[props.productId] || [];
});
</script>

<style scoped>
.review-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 15px;
}

.review-list {
  list-style: none;
  padding: 0;
}

.review-item {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.review-comment {
  flex: 1;
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
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input {
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
