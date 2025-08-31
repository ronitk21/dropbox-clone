import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./utils/auth.ts";
import errorHandler from "./middleware/middleware.ts";

dotenv.config();
const PORT = process.env.PORT || 5001;

const app = express();

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.get("/", (req, res) =>
  res.status(200).json({
    message: "success !",
  })
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on the Port: ${PORT}`));
