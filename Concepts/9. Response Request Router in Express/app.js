const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app
  .get("/", (req, res) => {
    console.log("Get Request");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("POST Request");
    res.send("Hello World! POST");
  })
  .put("/", (req, res) => {
    console.log("PUT Request");
    res.send("Hello World! PUT");
  })
  .delete("/", (req, res) => {
    console.log("Delete Request");
    res.send("Hello World! POST");
  });

app.get("/index", (req, res) => {
  console.log("Index File");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 5 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
