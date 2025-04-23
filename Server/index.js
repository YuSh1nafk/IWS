// index.js
import express from "express";
import mongoose from "mongoose";


import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();


// Routes
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
// (sau này thêm cart, order...)

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("✅ Server is running on port", PORT);
    });
  })
  .catch((err) => console.log(" MongoDB connection failed", err));
