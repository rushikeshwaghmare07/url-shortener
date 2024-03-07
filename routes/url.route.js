const express = require("express");
const router = express.Router()
const {handleGenerateShortURL} = require("../controllers/url.controller.js")

// Route for generating short URL
router.post("/", handleGenerateShortURL);

// Route for redirecting short URL to original URL
router.get("/shortId", )

// Routes for getting analytics
router.get("/analytics/:shortId", );

module.exports = router;