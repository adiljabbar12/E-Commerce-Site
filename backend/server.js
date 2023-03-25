import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import users from "./data/users.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
await connectDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is  running....");
});
// app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// app.listen(5000, () => {
//     console.log("Server running on port 5000");
//   });
