import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.port;
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.get("/", (req, res) => {
  res.send("hey wasup");
});
app.listen(port, () => console.log(`Server running on port ${port}`));
