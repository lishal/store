import mongoose from "mongoose";
import { generateGUID } from "../../shared/index";

const { Schema } = mongoose;

export const ProductSchema = new Schema(
  {
    _id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      required: [true, 'Please enter product name']
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"]
    },
  },
  {
    timestamps: true
  }
);
