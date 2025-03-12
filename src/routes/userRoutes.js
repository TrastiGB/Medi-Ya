const express = require("express");
const router = express.Router();
const { authMiddleware, adminMiddleware } = require("../middlewares/authMiddleware");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
} = require("../controllers/userControllers");

// Rutas protegidas
router.get("/", authMiddleware, adminMiddleware, getUsers); // Solo admin puede ver todos los usuarios
router.get("/:id", authMiddleware, getUserById); // Cualquier usuario autenticado puede ver su info
router.post("/", createUser); // ✅ Ahora es pública (antes tenía authMiddleware)
router.put("/:id", authMiddleware, updateUser); // Solo usuarios autenticados pueden actualizarse
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser); // Solo admin puede eliminar usuarios
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
