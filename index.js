const express = require("express");
require('dotenv').config();
const { connectToMongoDB } = require("./connection.js");

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

