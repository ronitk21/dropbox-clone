import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) =>
  res.status(200).json({
    message: "success !",
  })
);

app.listen(PORT, () => console.log(`Server is running on the Port: ${PORT}`));
