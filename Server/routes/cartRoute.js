// server/routes/cartRoutes.js
import express from "express";
import { addToCart, getCartByUser, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.post("/", addToCart);
router.get("/:userId", getCartByUser);
router.delete("/:userId/:productId", removeFromCart);

export default router;
