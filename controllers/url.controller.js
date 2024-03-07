const ShortUniqueId = require("short-unique-id");
const URL = require("../models/url.model.js");

// Function to generate short URL
async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortId = new ShortUniqueId({ length: 8 }).randomUUID();

  try {
    const createURL = await URL.create({
      shortId: shortId,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: createURL.shortId });
  } catch (error) {
    console.log("Error creating a URL", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle redirection of short URL to original URL
async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamps: Date.now() } } },
      { new: true } // Return the updated document
    );
    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    // Redirect to the original URL
    res.redirect(result.redirectURL);
  } catch (error) {
    console.log("Error redirecting:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to get analytics for a short URL
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  try {
    const result = await URL.findOne({ shortId });
    return res.json({
      totalClicks: result ? result.visitHistory.length : 0,
      analytics: result ? result.visitHistory : [],
    });
  } catch (error) {
    console.log("Error getting analytics:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  handleGenerateShortURL,
  handleRedirectURL,
  handleGetAnalytics
};
