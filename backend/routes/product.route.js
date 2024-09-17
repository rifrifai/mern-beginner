import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  productDetail,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/:id", productDetail);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
