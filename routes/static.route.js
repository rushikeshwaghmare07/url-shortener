const express = require("express");
const URL = require("../models/url.model.js");
const { restrictTo } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/", restrictTo(["NORMAL"]), async (req, res) => {
    const allurl = await URL.find({ createdBy: req.user._id });
    return res.render("home", {
    urls: allurl,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
})

router.get("/login", (req, res) => {
  return res.render("login");
});


module.exports = router;