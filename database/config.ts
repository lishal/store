import mongoose from "mongoose";
import { URI } from "../constant";

export const connectMongoDb = async () => {
  try {
    const connect = await mongoose.connect(URI);
    console.log(
      "Connected to mongoDB ",
      connect.connection.host,
      connect.connection.name
    )
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};
