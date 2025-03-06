const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  categoria: { type: DataTypes.STRING },
  imagen_url: { type: DataTypes.TEXT },
});

module.exports = Product;
