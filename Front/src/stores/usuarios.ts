import { defineStore } from "pinia";

interface User {
  nombre: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

export const useUsuariosStore = defineStore("usuarios", {
  state: () => ({
    usuarios: [],
    usuarioActual: null as User | null, // Para manejar la sesión del usuario
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch("http://localhost:5000/api/usuarios");
        if (!response.ok) throw new Error("Error al obtener usuarios");

        this.usuarios = await response.json();
      } catch (error) {
        console.error("❌ Error al obtener usuarios:", error);
      }
    },

    async registerUser(userData: User) {
      try {
        const response = await fetch("http://localhost:5000/api/usuarios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error("Error al registrar usuario");
        return await response.json();
      } catch (error) {
        console.error("❌ Error al registrar usuario:", error);
      }
    },

    async loginUser(credentials: LoginCredentials) {
      try {
        const response = await fetch("http://localhost:5000/api/usuarios/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        if (!response.ok) throw new Error("Credenciales incorrectas");
        this.usuarioActual = await response.json();
        return this.usuarioActual;
      } catch (error) {
        console.error("❌ Error en el login:", error);
      }
    },

    async logoutUser() {
      try {
        await fetch("http://localhost:5000/api/usuarios/logout", { method: "POST" });
        this.usuarioActual = null;
      } catch (error) {
        console.error("❌ Error al cerrar sesión:", error);
      }
    },
  },
});
