// server/models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    category: { type: String },
    countInStock: { type: Number, default: 0 },
    userId: { type: String, required: true },

  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
