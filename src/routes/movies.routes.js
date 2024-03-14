const express = require("express");
const movieRouter = express.Router();
const { createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie, } = require("../controllers/movie.controller");

// Ruta para crear un nuevo álbum
movieRouter.post("/", createMovie);
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.put("/:title", getMovieByTitle);
movieRouter.delete("/:genre", getMovieByGenre);

module.exports = movieRouter;