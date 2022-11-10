"use strict";

const express = require("express");

const PORT = 8000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (_, res) => {
  console.log("request to /");
  res.send("Hello World");
});

app.get("/exit", () => {
  console.log("exiting process");
  process.exit(1);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
