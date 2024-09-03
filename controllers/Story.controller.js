const storyService = require("../services/Story.services");

class StoryController {
  async createStory(req, res) {
    try {
      const savedStory = await storyService.createStory(req.body);
      res.status(200).json(savedStory);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateStory(req, res) {
    try {
      const updatedStory = await storyService.updateStory(req.params.id, req.body);
      res.status(200).json(updatedStory);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteStory(req, res) {
    try {
      await storyService.deleteStory(req.params.id);
      res.status(200).json("Story has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getStoryById(req, res) {
    try {
      const story = await storyService.getStoryById(req.params.id);
      res.status(200).json(story);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllStories(req, res) {
    try {
      const stories = await storyService.getAllStories(req.query);
      res.status(200).json(stories);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getStoriesByUser(req, res) {
    try {
      const stories = await storyService.getStoriesByUser(req.params.userId);
      res.status(200).json(stories);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new StoryController();
