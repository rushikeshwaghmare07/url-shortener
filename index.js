const express = require("express");
require('dotenv').config();
const { connectToMongoDB } = require("./connection.js");
const { db } = require("./models/url.model.js");

const app = express();
const PORT = process.env.PORT || 8001;

// Connect to MongoDB

connectToMongoDB()

    
app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
});