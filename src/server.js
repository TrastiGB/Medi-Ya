const express = require("express");
const cors = require("cors");
const path = require("path");
const { connectDB, sequelize } = require("./database/db");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");

// Importar rutas
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Importar carga inicial de productos
const { seedProducts } = require("./database/seedProducts");

const app = express();

// **Middlewares**
app.use(cors());
app.use(express.json());

// **Middleware para servir imágenes correctamente**
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

// **Configurar Swagger antes de las rutas**
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// **Conectar a la base de datos**
connectDB();

// **Sincronizar modelos con la base de datos y cargar productos de prueba**
sequelize
  .sync({ force: false })
  .then(async () => {
    console.log("✅ Base de datos sincronizada.");
    const productCount = await sequelize.models.Product.count();
    if (productCount === 0) {
      console.log("🔄 Insertando productos de prueba...");
      await seedProducts();
      console.log("✅ Productos de prueba insertados.");
    } else {
      console.log(`ℹ️ La base de datos ya tiene ${productCount} productos.`);
    }
  })
  .catch((error) =>
    console.error("❌ Error al sincronizar la base de datos:", error.message)
  );

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
app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
