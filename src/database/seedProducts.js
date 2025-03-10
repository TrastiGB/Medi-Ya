const Product = require("../models/Product");

const seedProducts = async () => {
  try {
    console.log("🔄 Insertando productos de prueba...");
    await Product.bulkCreate([
      {
        nombre: "Paracetamol",
        descripcion: "Analgésico y antipirético",
        precio: 5.0,
        stock: 100,
        categoria: "Medicamentos",
        imagen: "https://example.com/paracetamol.jpg"
      },
      {
        nombre: "Ibuprofeno",
        descripcion: "Antiinflamatorio",
        precio: 7.0,
        stock: 80,
        categoria: "Medicamentos",
        imagen: "https://example.com/ibuprofeno.jpg"
      },
      {
        nombre: "Alcohol en gel",
        descripcion: "Desinfectante para manos",
        precio: 3.0,
        stock: 50,
        categoria: "Higiene",
        imagen: "https://example.com/alcohol.jpg"
      }
    ]);
    console.log("✅ Productos de prueba insertados correctamente.");
  } catch (error) {
    console.error("❌ Error al insertar productos de prueba:", error.message);
  }
};

module.exports = { seedProducts };
