import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  addProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/add").post(addProduct);

export default router;
