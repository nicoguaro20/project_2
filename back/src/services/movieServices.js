const { Movie } = require("../models/Movies")
const getMovieServices = async () => {
    return await Movie.find()
  }

const createMovieService = async (movie) => {
  return await Movie.create(movie)
};
 
module.exports = {
    getMovieServices,
    createMovieService
};