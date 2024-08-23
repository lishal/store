import express from "express";
import http from "http";
import { PORT } from "./constant";
import { connectMongoDb } from "./database";
import { ProductController } from "./controller";
import { IProduct } from "./interface";

const app = express();

async function startServer() {
  try {
    await connectMongoDb();

    const productController = new ProductController();

    const dummyProduct: IProduct = {
      id: "123",
      name: "Sample Product",
      price: 29.99,
    };

    app.get("/", (req: any, res: any) => {
      res.send("Connected!");
    });

    app.get("/create-product", async (req: any, res: any) => {
      try {
        const product = await productController.addProduct(dummyProduct);
        res.status(201).json(product);
        console.log("Completed!");
      } catch (err: any) {
        console.log("Error is:", err);
        res.status(500).json({ error: err.message });
      }
    });

    app.listen(PORT, () => {
      console.log("Listening to port", PORT);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();
