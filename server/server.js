import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth/", userRouter);

app.get("/", (req, res) => {
  return res.send("Hello Working");
});

await connectDB();
app.listen(PORT, () => {
  console.log("Server is running on PORT 5001");
});
