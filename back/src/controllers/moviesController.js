const { getMovieServices , createMovieService } = require("../services/movieServices");

const getMoviesController = async (req, res) => {

    try{
        const respuesta = await getMovieServices();    
        res.status(200).json({
            message: "Aqui están todas las peliculas",
            data: respuesta
        })
    }catch (error) {
        res.status(500).json({
            message: "Error interno del servidor, intentelo de nuevo más tarde"
        })
    }

    req.params
    req.query
    req.body
   
};

const createdMoviesController = (req,res) => {

    const respuesta = createMovieService(req.body);
    res.status(201).json({
        message: respuesta,
        data: req.body
    })
};

module.exports = {
    getMoviesController,
    createdMoviesController
};