import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/users.routes.js";

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "you reached backend" });
});

export default app;
