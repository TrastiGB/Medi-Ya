const express = require("express");
const router = express.Router();
const { getProducts, getProductById, createProduct, getReviewsByProduct, addReview } = require("../controllers/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.get("/:id/reviews", getReviewsByProduct);
router.post("/:id/reviews", addReview);

module.exports = router;
