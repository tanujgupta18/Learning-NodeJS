const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/services", (req, res) => {
  res.send("Service Page");
});

// This get very hectic to create endpoints that why we express

// solution to this problem

app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  res.send(`${req.params.slug} Page`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
