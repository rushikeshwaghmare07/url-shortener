const express = require("express");
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Server is started at port: ${PORT}`);
});