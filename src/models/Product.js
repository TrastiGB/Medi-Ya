const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT, allowNull: true },
  precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  categoria: { 
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: { isIn: [["Medicamento", "Suplemento", "Cuidado Personal"]] }
  },
  imagen: { type: DataTypes.TEXT, defaultValue: "imagenes/default.jpg" },
  fecha_alta: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  fecha_actualizacion_precio: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Product;
