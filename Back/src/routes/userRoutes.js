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
router.get("/", authMiddleware, adminMiddleware, getUsers);
router.get("/:id", authMiddleware, getUserById);
router.post("/registro", createUser); 
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
