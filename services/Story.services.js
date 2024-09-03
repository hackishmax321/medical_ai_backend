const Story = require("../models/Story");

class StoryService {
  async createStory(storyData) {
    const newStory = new Story(storyData);
    try {
      const savedStory = await newStory.save();
      return savedStory;
    } catch (err) {
      throw err;
    }
  }

  async updateStory(id, updatedData) {
    try {
      const updatedStory = await Story.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedStory;
    } catch (err) {
      throw err;
    }
  }

  async deleteStory(id) {
    try {
      await Story.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getStoryById(id) {
    try {
      const story = await Story.findById(id);
      return story;
    } catch (err) {
      throw err;
    }
  }

  async getAllStories(query) {
    try {
      const stories = await Story.find(query);
      return stories;
    } catch (err) {
      throw err;
    }
  }

  async getStoriesByUser(userId) {
    try {
      const stories = await Story.find({ user: userId }).sort({ createdAt: -1 });
      return stories;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new StoryService();
