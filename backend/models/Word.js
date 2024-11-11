const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  genre: {
    type: String,
  },
});

const Game = mongoose.model("Game", gameSchema);
