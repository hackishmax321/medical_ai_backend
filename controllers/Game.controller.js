const gameService = require("../services/Game.service");

class GameController {
  async createGame(req, res) {
    try {
      const savedGame = await gameService.createGame(req.body);
      res.status(200).json(savedGame);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateGame(req, res) {
    try {
      const updatedGame = await gameService.updateGame(req.params.id, req.body);
      res.status(200).json(updatedGame);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteGame(req, res) {
    try {
      await gameService.deleteGame(req.params.id);
      res.status(200).json("Game has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getGameById(req, res) {
    try {
      const game = await gameService.getGameById(req.params.id);
      res.status(200).json(game);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllGames(req, res) {
    try {
      const games = await gameService.getAllGames();
      res.status(200).json(games);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getGamesByUser(req, res) {
    try {
      const games = await gameService.getGamesByUser(req.params.userId);
      res.status(200).json(games);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getGamesByDoctor(req, res) {
    try {
      const games = await gameService.getGamesByDoctor(req.params.doctorId);
      res.status(200).json(games);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getLatestGameByUser(req, res) {
    try {
      const latestGame = await gameService.getLatestGameByUser(req.params.userId);
      if (!latestGame) {
        return res.status(404).json({ message: "No games found for this user" });
      }
      res.status(200).json(latestGame);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new GameController();
