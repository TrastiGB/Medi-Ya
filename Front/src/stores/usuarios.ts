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
        console.error("Error al obtener usuarios:", error);
      }
    },

    async registerUser(userData: User) {
      try {
        const response = await fetch("http://localhost:5000/api/usuarios/registro", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Error al registrar usuario");

        return data;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Error desconocido";
        console.error("Error al registrar usuario:", errorMessage);
        throw new Error(errorMessage);  
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
        console.error("Error en el proceso de login:", error);
      }
    },

    async logoutUser() {
      try {
        await fetch("http://localhost:5000/api/usuarios/logout", { method: "POST" });
        this.usuarioActual = null;
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    },
  },
});
