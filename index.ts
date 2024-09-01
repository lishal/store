import express from "express";
import { PORT } from "./constant";
import router from "./routes";
import { connectMongoDb } from "./database";
const app = express();

const startServer = async () => {
  try {
    await connectMongoDb();
    app.use(express.json());
    app.use("/", router);

    app.listen(PORT);
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
