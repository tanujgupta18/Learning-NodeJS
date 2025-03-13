const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// MiddleWare 1
app.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  next();
});

// MiddleWare 2
app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
