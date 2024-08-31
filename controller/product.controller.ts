import { Request, Response } from "express";
import { Product } from "../model";
import { generateGUID } from "../shared";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = {
      ...req.body,
      _id: generateGUID(),
    };

    const product = new Product(productData);
    const savedProduct = await product.save();
    res.status(200).json(savedProduct);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    } else {
      res.status(200).json(product);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  const updatedProductData = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      updatedProductData,
      {
        runValidators: true,
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
