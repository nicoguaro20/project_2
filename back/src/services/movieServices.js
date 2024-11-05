const { movie, Movie } = require("../models/Movies")

let id = 4;

const getMovieServices = async () => {
    return await Movie.find()
  }

const createMovieService = (movie) => {
  movie.id = id;
  id++;
  tempData.push(movie);
  return("Se ha creado correctamente la pelicula")
};
 
module.exports = {
    getMovieServices,
    createMovieService
};