import { Request, Response } from "express";
import { Product } from "../model";
import { generateGUID } from "../shared";
import {
  succeeded,
  notFoundError,
  validationError,
  handleError,
  created,
} from "../response";
import { PRODUCT } from "../constant";

/**
@description create product
@route POST /create-product
@access private
**/
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return validationError(res, "All fields are required");
    }
    const productData = { name, price, _id: generateGUID() };
    const product = new Product(productData);
    await product.save();
    return created(res, product);
  } catch (error: unknown) {
    return handleError(res, error);
  }
};

/**
@description get products
@route GET /products
@access private
**/
export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return succeeded(res, products);
  } catch (error: unknown) {
    return handleError(res, error);
  }
};

/**
@description get product details
@route GET /:id
@access private
**/
export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return notFoundError(res, PRODUCT);
    } else {
      return succeeded(res, product);
    }
  } catch (error: unknown) {
    return handleError(res, error);
  }
};

/**
@description update product
@route PUT /:id
@access private
**/
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
      return notFoundError(res, PRODUCT);
    }
    return succeeded(res, product);
  } catch (error: unknown) {
    return handleError(res, error);
  }
};

/**
@description delete product
@route DELETE /:id
@access private
**/
export const deleteProductById = async (req: Request, res: Response) => {
  const productId = req.params["id"];
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return notFoundError(res, PRODUCT);
    }
    return succeeded(res, product);
  } catch (error: unknown) {
    return handleError(res, error);
  }
};
