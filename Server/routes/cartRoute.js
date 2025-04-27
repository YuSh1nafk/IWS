// server/routes/cartRoutes.js
import express from "express";
import { addToCart, getUserCart, deleteFromCart, clearCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/", addToCart);
router.get("/:userId", getUserCart);
router.delete("/:userId/items/:productId", deleteFromCart);
router.delete("/:userId", clearCart);

export default router;
