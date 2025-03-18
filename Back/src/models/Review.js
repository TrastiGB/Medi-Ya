const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const Product = require("./Product");

const Review = sequelize.define("Review", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  comentario: { type: DataTypes.TEXT, allowNull: false },
  calificacion: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
  productoId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Product, key: "id" } },
});

Product.hasMany(Review, { foreignKey: "productoId", onDelete: "CASCADE" });
Review.belongsTo(Product, { foreignKey: "productoId" });

module.exports = Review;
