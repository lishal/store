import mongoose from "mongoose";
import { IProduct } from "../interface";
import { ProductSchema } from "./product-schema";

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
