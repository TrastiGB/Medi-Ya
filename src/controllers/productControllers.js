const Product = require("../models/Product");

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const productos = await Product.findAll();
    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crear un producto (solo admin)
const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock = 100, imagen, categoria } = req.body;
    if (!nombre || !precio || !stock || !categoria)
      return res.status(400).json({ error: "Todos los campos obligatorios deben completarse" });

    const nuevoProducto = await Product.create({ nombre, descripcion, precio, stock, imagen, categoria });
    res.status(201).json({ message: "Producto creado exitosamente", producto: nuevoProducto });
  } catch (error) {
    console.error("Error al crear el producto:", error);
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualizar un producto (solo admin)
const updateProduct = async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });

    await producto.update(req.body);
    res.json({ message: "Producto actualizado correctamente", producto });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar un producto (solo admin)
const deleteProduct = async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });

    await producto.destroy();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
