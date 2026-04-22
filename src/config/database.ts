import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
import { env } from "./env";

dotenv.config();

const uri = env.mongoUri;
const dbName = env.mongoDbName;

let client: MongoClient;
let db: Db;

export const connectDB = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();

    db = client.db(dbName);

    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error);
    process.exit(1);
  }
};

export const getDb = () => {
  if (!db) {
    throw new Error("DB no inicializada. Primero llama connectDB()");
  }
  return db;
};