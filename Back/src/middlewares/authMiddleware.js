const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json({ error: "Acceso denegado. Debes iniciar sesión." });
    }
    next();
};

// Middleware para verificar si el usuario es administrador
const adminMiddleware = (req, res, next) => {
    if (!req.session.user || req.session.user.tipo !== "administrador") {
        return res.status(403).json({ error: "Acceso denegado. Se requiere rol de administrador." });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };
