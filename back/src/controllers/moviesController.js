const { getMovieServices , createMovieService } = require("../services/movieServices");


const getMoviesController = async (req, res) => {

    try {
        const respuesta = await getMovieServices();    
        res.status(200).json({
            message: "Aqui están todas las peliculas",
            data: respuesta
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    } 
};

const createdMoviesController = async (req, res) => {
    try {
        const respuesta = await createMovieService(req.body);
        res.status(201).json({
            message: "Pelicula creada con exito",
            data: respuesta
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

module.exports = {
    getMoviesController,
    createdMoviesController
};