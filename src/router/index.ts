import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Blog from '../views/Blog.vue'; 
import Meds from '../views/Meds.vue';
import Higiene from '../views/Higiene.vue';
import Cosmetica from '../views/Cosmetica.vue';
import Nutricion from '../views/Nutricion.vue';
import Oportunidades from '../views/Oportunidades.vue';


const routes = [
  { path: '/', component: Home, meta: { public: true } },
  { path: '/login', component: Login, meta: { public: true } },
  { path: '/register', component: Register, meta: { public: true } },
  { path: '/blog', component: Blog, meta: { public: true } },
  { path: '/medicamentos', component: Meds, meta: { public: true } },
  { path: '/higiene', component: Higiene, meta: { public: true } },
  { path: '/cosmetica', component: Cosmetica, meta: { public: true } },
  { path: '/nutricion', component: Nutricion, meta: { public: true } },
  { path: '/oportunidades', component: Oportunidades, meta: { public: true } },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Protegemos rutas privadas (esto se mejorará más adelante con autenticación)
router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Esto se conectará con Pinia después
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
