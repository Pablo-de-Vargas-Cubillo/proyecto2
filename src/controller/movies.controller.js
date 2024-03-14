const Movies = require("../model/movies.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createMovie = async (req, res, next) => {
  try {
    const movie = await Movies.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const getAllMovies = async (req, res, next) => {
  try {
    const movie = await Movies.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const movie = await Movies.findById(req.params.id);
    if (movie) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: movie,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (movie) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: album,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const movie = await Movies.findByIdAndDelete(req.params.id);
    if (movie) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};