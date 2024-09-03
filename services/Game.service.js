const Game = require("../models/Game");

class GameService {
  async createGame(gameData) {
    const newGame = new Game(gameData);
    try {
      const savedGame = await newGame.save();
      return savedGame;
    } catch (err) {
      throw err;
    }
  }

  async updateGame(id, updatedData) {
    try {
      const updatedGame = await Game.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true }
      );
      return updatedGame;
    } catch (err) {
      throw err;
    }
  }

  async deleteGame(id) {
    try {
      await Game.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getGameById(id) {
    try {
      const game = await Game.findById(id);
      return game;
    } catch (err) {
      throw err;
    }
  }

  async getAllGames() {
    try {
      const games = await Game.find().sort({ createdAt: -1 });
      return games;
    } catch (err) {
      throw err;
    }
  }

  async getGamesByUser(userId) {
    try {
      const games = await Game.find({ user: userId }).sort({ createdAt: -1 });
      return games;
    } catch (err) {
      throw err;
    }
  }

  async getGamesByDoctor(doctorId) {
    try {
      const games = await Game.find({ doctor: doctorId }).sort({ createdAt: -1 });
      return games;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new GameService();
