const mongoose = require("mongoose");

// Definición del esquema del álbum
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Album;

