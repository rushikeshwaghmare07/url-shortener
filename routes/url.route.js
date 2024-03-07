const express = require("express");
const router = express.Router()
const { handleGenerateShortURL, handleRedirectURL } = require("../controllers/url.controller.js")

// Route for generating short URL
router.post("/", handleGenerateShortURL);

// Route for redirecting short URL to original URL
router.get("/:shortId", handleRedirectURL)

// Routes for getting analytics
router.get("/analytics/:shortId", );

module.exports = router;