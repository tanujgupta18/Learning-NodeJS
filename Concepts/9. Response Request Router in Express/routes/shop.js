const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Shop Home Page");
});

router.get("/about", (req, res) => {
  res.send("Shop About Page");
});

module.exports = router;
