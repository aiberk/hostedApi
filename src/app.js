const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    "Hello World": "hi",
    A: "I",
  });
});

app.use("./netlify/functions/api", router);

module.exports.handler = serverless(app);

// const importData = require("./data.json");
// let port = process.env.PORT || 3000;

// app.get("/", (red, res) => {
//   res.send("Hello World");
// });

// app.get("/players", (req, res) => {
//   res.send(importData);
// });

// app.listen(port, () => {
//   console.log("Iam Listening on ");
// });
