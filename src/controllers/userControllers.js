const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ["password"] } });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

// Crear usuario
const createUser = async (req, res) => {
  try {
    const { nombre, email, password, tipo } = req.body;
    if (!nombre || !email || !password)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ error: "El correo ya está registrado" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ nombre, email, password: hashedPassword, tipo });

    res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

// Actualizar usuario
const updateUser = async (req, res) => {
  try {
    const { nombre, email, tipo } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    await user.update({ nombre, email, tipo });
    res.json({ message: "Usuario actualizado correctamente", user });
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

// Eliminar usuario
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    await user.destroy();
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

// Iniciar sesión
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

// **Exportar controladores**
module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser, loginUser };
