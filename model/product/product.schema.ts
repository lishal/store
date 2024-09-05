import mongoose from "mongoose";

const { Schema } = mongoose;

export const ProductSchema = new Schema(
  {
    _id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: [true, "please provide product name"],
    },
    price: {
      type: Number,
      required: [true, "please provide product price"],
    },
  },
  {
    timestamps: true,
  }
);
