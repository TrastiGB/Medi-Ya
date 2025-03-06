const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  direccion: { type: DataTypes.TEXT },
  telefono: { type: DataTypes.STRING },
  fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = User;
