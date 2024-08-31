import mongoose from "mongoose";
import { IProduct } from "../interface";
import { ProductSchema } from "../database";

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
