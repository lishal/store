import { Request, Response } from "express";
import { Product } from "../model";
import { generateGUID } from "../shared";
import { successResponse, error404, error400 } from "../response";
import { PRODUCT } from "../constant";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = {
      ...req.body,
      _id: generateGUID(),
    };

    const product = new Product(productData);
    await product.save();
    return successResponse(res, product);
  } catch (error: any) {
    return error400(res, error.message);
  }
};

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return successResponse(res, products);
  } catch (error: any) {
    return error400(res, error.message);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return error404(res, PRODUCT);
    } else {
      return successResponse(res, product);
    }
  } catch (error: any) {
    return error400(res, error.message);
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
      return error404(res, PRODUCT);
    }
    return successResponse(res, product);
  } catch (error: any) {
    return error400(res, error.message);
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return error404(res, PRODUCT);
    }
    return successResponse(res, product);
  } catch (error: any) {
    return error400(res, error.message);
  }
};
