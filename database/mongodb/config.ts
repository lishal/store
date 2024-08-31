import mongoose from "mongoose";
import { URI } from "../../constant";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};
