const mongoose = require("mongoose");

const movieObject = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    }
});


const movieSchema = new mongoose.Schema(movieObject);

const Movie = mongoose.model("Movie",movieSchema);

module.exports = {
    Movie
};