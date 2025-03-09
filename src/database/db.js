const { Sequelize } = require("sequelize");

// Configuración de la conexión a PostgreSQL
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false, // Deshabilitar logs de SQL
  }
);

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos establecida con éxito.");
  } catch (error) {
    console.error("❌ Error al conectar la base de datos:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
