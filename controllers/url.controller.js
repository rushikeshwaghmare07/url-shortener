const ShortUniqueId = require("short-unique-id");
const URL = require("../models/url.model.js");


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

module.exports = {
    handleGenerateShortURL,
};
