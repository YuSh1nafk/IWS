// server/controllers/productController.js
import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, originalPrice, material, care, fit, image, userId } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      originalPrice,
      material,
      care,
      fit,
      image,
      userId
    });

    await newProduct.save();
    res.status(201).json(newProduct);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy tất cả sản phẩm
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 sản phẩm theo id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xoá sản phẩm
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//lọc sản phẩm
export const searchProduct = async (req, res) => {
  try {
    const { keyword, category, minPrice, maxPrice, sort } = req.query;

    // Xây dựng object filter động
    let filter = {};

    if (keyword) {
      filter.name = { $regex: keyword, $options: "i" }; // tìm gần đúng, không phân biệt hoa thường
    }

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = parseInt(minPrice);
      if (maxPrice) filter.price.$lte = parseInt(maxPrice);
    }

    // Query
    let query = Product.find(filter);

    // Sắp xếp (price: 1 = tăng dần, -1 = giảm dần)
    if (sort === "asc") query = query.sort({ price: 1 });
    if (sort === "desc") query = query.sort({ price: -1 });

    const products = await query;
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

