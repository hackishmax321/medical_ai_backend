const express = require("express");
const router = express.Router();
const storyController = require("../controllers/Story.controller");



router.post("/", storyController.createStory);
router.patch("/:id", storyController.updateStory);

router.delete("/:id", storyController.deleteStory);
router.get("/find/:id", storyController.getStoryById);
router.get("/", storyController.getAllStories);
router.get("/user/:userId", storyController.getStoriesByUser);

module.exports = router;
