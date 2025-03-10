const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  precio: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  imagen: { type: DataTypes.STRING, allowNull: true },
  categoria: { type: DataTypes.STRING(50), allowNull: false }
});

module.exports = Product;
