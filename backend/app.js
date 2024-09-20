import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

const app = express();
dotenv.config();
app.use(express.json()); // mengizinkan utk mengisi req body menggunakan json data
app.use(express.urlencoded({ extended: true })); // mengizinkan utk mengisi req body menggunakan form

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

// conn
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err));

// what a lazy
