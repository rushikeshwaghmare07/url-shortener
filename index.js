const express = require("express");
require('dotenv').config();
const { connectToMongoDB } = require("./connection.js");
const urlRoute = require("./routes/url.route.js");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRoute);

connectToMongoDB()
    .then(() =>{
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is started at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !! ", err);
    })

