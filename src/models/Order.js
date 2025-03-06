const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  estado: { type: DataTypes.STRING, defaultValue: "pendiente" },
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Order;
