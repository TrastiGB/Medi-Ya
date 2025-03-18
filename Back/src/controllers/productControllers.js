const Product = require("../models/Product");
const Review = require("../models/Review");

const getProducts = async (req, res) => {
  try {
    const productos = await Product.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

const getProductById = async (req, res) => {
  try {
    const producto = await Product.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock = 100, imagen, categoria } = req.body;
    if (!nombre || !precio || !stock || !categoria)
      return res.status(400).json({ error: "Todos los campos obligatorios deben completarse" });

    const nuevoProducto = await Product.create({ nombre, descripcion, precio, stock, imagen, categoria });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

const getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.findAll({ where: { productoId: req.params.id } });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las reseñas" });
  }
};

const addReview = async (req, res) => {
  try {
    const { comentario, calificacion } = req.body;
    const { id } = req.params;
    const producto = await Product.findByPk(id);

    if (!producto) return res.status(404).json({ error: "Producto no encontrado" });

    const nuevaReseña = await Review.create({ comentario, calificacion, productoId: id });
    res.status(201).json(nuevaReseña);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar la reseña" });
  }
};

module.exports = { getProducts, getProductById, createProduct, getReviewsByProduct, addReview };
