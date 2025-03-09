const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./database/db");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");

// Importar rutas
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes"); 

const app = express();

// **Middlewares**
app.use(cors());
app.use(express.json());

// **Configurar Swagger antes de las rutas**
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// **Conectar a la base de datos**
connectDB();

// **Sincronizar modelos con la base de datos**
sequelize
  .sync({ force: false })
  .then(() => console.log("✅ Base de datos sincronizada"))
  .catch((error) => console.error("❌ Error al sincronizar la base de datos:", error));

// **Definir Rutas de la API**
app.use("/api/usuarios", userRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/pedidos", orderRoutes);

// **Ruta de prueba**
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de MEDIYA");
});

// **Iniciar servidor**
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
