import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 }
});

const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // 👈 nên để ObjectId
    items: [CartItemSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartSchema);
