import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interface";

const ProductSchema: Schema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
