require("dotenv").config();

const mongoose = require("mongoose");

const dbConection = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.yjtt3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`);
};

module.exports = dbConection;