import "express-async-errors";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { body, validationResult } from "express-validator";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ msg: "something went wrong" });
// });
// app.post("/", (req, res) => {
//   console.log(req);
//   res.json({ message: "Data received", data: req.body });
// });
