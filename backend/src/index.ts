import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) =>
  res.status(200).json({
    message: "success !",
  })
);

app.listen(PORT, () => console.log(`Server is running on the Port: ${PORT}`));
