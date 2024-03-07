const mongoose = require("mongoose");

async function connectToMongoDB() {
    try {
        const mongoURI = process.env.MONGODB_URI;

        await mongoose.connect(`${mongoURI}`);
        console.log(`Successfully Connected to MongoDB database`)
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

module.exports = {
    connectToMongoDB
}