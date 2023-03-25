import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
//@dec Fetch all products
//@route GET/api/products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//@dec Fetch single products
//@route GET/api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
const addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    brand,
    category,
    description,
    rating,
    numReviews,
    price,
    countInStock,
  } = req.body;
  const userExists = await Product.findOne({ name });
  if (userExists) {
    res.status(400);
    throw new Error("Product already exists");
  }
  const product = await Product.create({
    user: req.body.user, //Same as >> name:name
    name,
    image,
    brand,
    category,
    description,
    rating,
    numReviews,
    price,
    countInStock,
  });
  if (product) {
    res.send(201).json({
      _id: user._id,
      name: product.name,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
      rating: product.rating,
      numReviews: product.numReviews,
      price: product.price,
      countInStock: product.countInStock,
    });
  } else {
    res.status(400);
    throw new Error("Invalid product data");
  }
});
export { getProducts, getProductById, addProduct };
