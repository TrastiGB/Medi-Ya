const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  password: { type: DataTypes.TEXT, allowNull: false },
  tipo: { type: DataTypes.STRING(50), defaultValue: "usuario" },
  fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = User;
