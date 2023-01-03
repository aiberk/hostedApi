const express = require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (red, res) => {
  res.send("Hello World");
});

app.get("/players", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log("Iam Listening on ");
});
