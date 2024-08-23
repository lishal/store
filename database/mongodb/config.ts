import { MongoClient, ServerApiVersion } from "mongodb";
import { URI } from "../../constant";

let isConnected: boolean = false;

const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export async function connectMongoDb() {
  if (isConnected) {
    console.log("Already connected to MongoDB.");
    return client;
  }

  try {
    await client.connect();
    isConnected = true;
    return client;
  } catch (err) {
    isConnected = false;
    console.warn("Error is:", err);
    throw err;
  }
}

export function getDatabase() {
  if (!isConnected) {
    throw new Error("You must connect to MongoDB first.");
  }
  return client.db();
}
