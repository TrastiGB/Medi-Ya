# Usa una imagen de Node.js oficial como base
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Usa una imagen ligera de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos generados en la carpeta "dist" al servidor Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80 para el tráfico HTTP
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
