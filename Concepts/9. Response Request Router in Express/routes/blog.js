const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Blog Home Page");
});

router.get("/about", (req, res) => {
  res.send("Blog About Page");
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`Fetch the blogpost for ${req.params.slug}`);
});

module.exports = router;
