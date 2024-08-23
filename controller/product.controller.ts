import { IProduct } from "../interface";
import { Product } from "../model";

import { getDatabase } from "../database";

export class ProductController {
  private collection: any;
  constructor() {
    const db = getDatabase();
    this.collection = db.collection("Products");
  }
  getProductList() {
    console.log("I am product list!");
  }

  deleteProduct(productId: string) {
    console.log("I am delete Product");
  }

  async addProduct(productDetail: IProduct) {
    try {
      // const product = new Product(productDetail);
      // await product.save();
      // console.log("Product Created!");
      const result = await this.collection.insertOne(productDetail);
      console.log("Product Created!", result);
    } catch (error) {
      throw error;
    }
  }

  editProductById(productId: string) {
    console.log("I am edit product Id");
  }
}
