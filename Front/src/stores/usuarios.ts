import { defineStore } from 'pinia';

export const useUsuariosStore = defineStore('usuarios', {
  state: () => ({
    usuarios: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:5000/swagger/#/default/get_api_usuarios');

        if (!response.ok) {
          throw new Error('Error al obtener usuarios');
        }

        this.usuarios = await response.json();
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
  },
});
