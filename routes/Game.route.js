const express = require("express");
const router = express.Router();
const gameController = require("../controllers/Game.controller");

router.post("/", gameController.createGame);
router.patch("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);
router.get("/find/:id", gameController.getGameById);
router.get("/", gameController.getAllGames);
router.get("/user/:userId", gameController.getGamesByUser);
router.get("/doctor/:doctorId", gameController.getGamesByDoctor);

module.exports = router;
