import express from "express";

const app = express();

app.use("/", express.static("dist"));

app.listen(5173, () => {
  console.log("http://localhost:5173.");
});
