import mongoose from "mongoose";
import { generateGUID } from "../../shared";

const { Schema } = mongoose;

export const ProductSchema = new Schema({
  _id: { type: String, require: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
});
