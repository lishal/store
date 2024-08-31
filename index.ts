import express from "express";
import http from "http";
import { PORT } from "./constant";
import router from "./routes";
import { connectMongoDb } from "./database";
("./database/mongodb");
const app = express();

async function startServer() {
  try {
    await connectMongoDb();
    app.use(express.json());
    app.use("/", router);

    app.listen(PORT, () => {
      console.log("Listening to port", PORT);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

startServer();
