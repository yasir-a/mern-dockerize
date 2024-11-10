import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const PORT = 5000;
const app = express();

// Root route
app.get("/products", (req, res) => {
  res.send("server");
});

console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server has started at: http://localhost:${PORT}`);
});
