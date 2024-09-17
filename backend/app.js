import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

const app = express();
dotenv.config();
app.use(express.json()); // mengisi req body menggunakan json data

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("server started at http://localhost:5000");
});

// conn
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));
