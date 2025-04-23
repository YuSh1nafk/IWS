// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config(); 


// Routes
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
// (sau này thêm cart, order...)

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("✅ Server is running on port", PORT);
    });
  })
  .catch((err) => console.log(" MongoDB connection failed", err));
