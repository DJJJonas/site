import express from "express";

function getPort() {
  let port = process.env.PORT;
  if (!port) {
    return 5173;
  }
  port = Number.parseInt(port);
  return port;
}

const PORT = getPort();
const app = express();

app.use("/", express.static("dist"));

app.listen(PORT, () => {
  console.log("Server started and listening on port " + PORT);
});
