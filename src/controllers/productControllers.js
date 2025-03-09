const Product = require("../models/Product");

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, imagen } = req.body;
    const newProduct = await Product.create({ nombre, descripcion, precio, categoria, imagen });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, categoria, imagen } = req.body;
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });

    await product.update({ nombre, descripcion, precio, categoria, imagen });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });

    await product.destroy();
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
