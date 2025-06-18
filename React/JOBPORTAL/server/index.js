import express from "express";
import dotenv from "dotenv";
import AuthRouter from "../server/src/routes/authRouter.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to server!" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
