"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.connectDB = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
let client;
let db;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        client = new mongodb_1.MongoClient(uri);
        yield client.connect();
        db = client.db(dbName);
        console.log("✅ MongoDB conectado correctamente");
    }
    catch (error) {
        console.error("❌ Error conectando MongoDB:", error);
        process.exit(1);
    }
});
exports.connectDB = connectDB;
const getDb = () => {
    if (!db) {
        throw new Error("DB no inicializada. Primero llama connectDB()");
    }
    return db;
};
exports.getDb = getDb;
