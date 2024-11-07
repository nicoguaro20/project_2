const validationMovieData = (req,res,next) => {
    const fields = ["title", "year", "director", "duration", "genre", "rate", "poster"];
    const fieldsFiltered = fields.filter(field => !req.body[field]);
    if(fieldsFiltered.length > 0){
        res.status(400).json({
            message: `Falta información para crear la pelicula: ${fieldsFiltered.join(", ")}.`
        })
    } else {
        next();
    }
};


module.exports = {
    validationMovieData
};