const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./database/db");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json"); // <- Asegúrate de que este archivo existe

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Sincronizar modelos con la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log("✅ Base de datos sincronizada");
});

// **Ruta de documentación con Swagger**
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de MEDIYA");
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
