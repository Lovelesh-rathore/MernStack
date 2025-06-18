import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("server connected");
  res.json({ message: "Hello i'm backend" });
});

app.listen(5000, () => {
  console.log("Server Started");
});
