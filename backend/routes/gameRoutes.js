const express = require("express");
const Game = require("../models/Game");

const router = express.Router();

// @route   POST /api/game (or /api/games if you change the server.js)
router.post("/", async (req, res) => {
  const { name, description, releaseDate, genre } = req.body;

  try {
    const game = new Game({
      name,
      description,
      releaseDate,
      genre,
    });

    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/game (or /api/games if you change the server.js)
router.get("/", async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET /api/game/:id (or /api/games/:id if you change the server.js)
router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT /api/game/:id (or /api/games/:id if you change the server.js)
router.put("/:id", async (req, res) => {
  const { name, description, releaseDate, genre } = req.body;

  try {
    const game = await Game.findByIdAndUpdate(
      req.params.id,
      { name, description, releaseDate, genre },
      { new: true }
    );
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   DELETE /api/game/:id (or /api/games/:id if you change the server.js)
router.delete("/:id", async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
