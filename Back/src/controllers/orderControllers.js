const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");

// Obtener todos los pedidos
const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: User, attributes: ["id", "nombre", "email"] },
        { model: Product, attributes: ["id", "nombre", "precio"] },
      ],
    });
    res.json(orders);
  } catch (error) {
    console.error("Error al obtener pedidos:", error);
    res.status(500).json({ error: "Error al obtener los pedidos" });
  }
};

// Obtener un pedido por ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id", "nombre", "email"] },
        { model: Product, attributes: ["id", "nombre", "precio"] },
      ],
    });
    if (!order) return res.status(404).json({ error: "Pedido no encontrado" });

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el pedido" });
  }
};

// Crear un nuevo pedido
const createOrder = async (req, res) => {
  try {
    const { usuario_id, producto_id, cantidad, precio_unitario, total, direccion_entrega } = req.body;

    if (!usuario_id || !producto_id || !cantidad || !precio_unitario || !total || !direccion_entrega) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newOrder = await Order.create({
      usuario_id,
      producto_id,
      cantidad,
      precio_unitario,
      total,
      direccion_entrega,
      enviado: false,
      fecha_enviado: null,
    });

    res.status(201).json({ message: "Pedido creado exitosamente", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el pedido" });
  }
};

// Actualizar un pedido
const updateOrder = async (req, res) => {
  try {
    const { cantidad, precio_unitario, total, direccion_entrega, enviado } = req.body;
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Pedido no encontrado" });

    await order.update({
      cantidad,
      precio_unitario,
      total,
      direccion_entrega,
      enviado,
      fecha_enviado: enviado ? new Date() : null,
    });

    res.json({ message: "Pedido actualizado correctamente", order });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el pedido" });
  }
};

// Eliminar un pedido
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Pedido no encontrado" });

    await order.destroy();
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pedido" });
  }
};

module.exports = { getOrders, getOrderById, createOrder, updateOrder, deleteOrder };
