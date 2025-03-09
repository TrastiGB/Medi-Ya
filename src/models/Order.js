const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const User = require("./User");
const Product = require("./Product");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id"
    },
    onDelete: "CASCADE"
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id"
    },
    onDelete: "CASCADE"
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  direccion_entrega: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  enviado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  fecha_enviado: {
    type: DataTypes.DATE,
    allowNull: true
  }
});

// **Definir relaciones correctamente**
Order.belongsTo(User, { foreignKey: "usuario_id", as: "usuario" });
Order.belongsTo(Product, { foreignKey: "producto_id", as: "producto" });

module.exports = Order;
