const express = require("express");
require('dotenv').config();
const path = require("path");
const { connectToMongoDB } = require("./connection.js");
const urlRoute = require("./routes/url.route.js");

const app = express();


connectToMongoDB()
    .then(() =>{
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is started at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !! ", err);
    })

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/url", urlRoute);

// Redirect to original URL for short URLs
app.get("/:shortId", urlRoute);
