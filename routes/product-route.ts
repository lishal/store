import { Router } from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "../controller";

const router = Router();

router.post("/create-product", createProduct);
router.get("/products", getAllProduct);
router.route("/:id")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

export default router;
