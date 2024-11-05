const { Router } = require("express");
const { getMoviesController } = require("../controllers/moviesController");
const { createdMoviesController } = require("../controllers/moviesController");
const { validationMovieData } = require("../middlewares/index");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.get("/:id", getMoviesController);

moviesRouter.post("/", validationMovieData,  createdMoviesController);

module.exports = {
    moviesRouter
};