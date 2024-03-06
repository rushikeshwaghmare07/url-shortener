const express = require("express");
require('dotenv').config();
const { connectToMongoDB } = require("./connection.js");

const app = express();
const PORT = process.env.PORT || 8001;


// Connect to MongoDB
connectToMongoDB(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB:", err);
        process.exit(1);
    })

    
app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
});