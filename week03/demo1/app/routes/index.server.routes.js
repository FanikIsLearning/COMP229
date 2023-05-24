var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("index", { title: "About" });
});

router.get("/content", function (req, res, next) {
  res.render("index", { title: "Content" });
});

router.get("/services", function (req, res, next) {
  res.render("index", { title: "Services" });
});

module.exports = router;
