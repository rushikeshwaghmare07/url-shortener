const mongoose = require("mongoose");

async function connectToMongoDB() {
    try {
        const mongoURI = process.env.MONGODB_URI;
        const dbName = process.env.DB_NAME;

        await mongoose.connect(`${mongoURI}/${dbName}`);
        console.log(`Successfully Connected to MongoDB database: ${dbName}`)
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

module.exports = {
    connectToMongoDB
}