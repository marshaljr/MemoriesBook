import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;
const db = process.env.MONGODB_URI;

mongoose
  .connect(db)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
