const userChatSessionService = require("../services/UserChatSessions.service");

class UserChatSessionController {
  // Create a new chat session
  async createSession(req, res) {
    try {
      const savedSession = await userChatSessionService.createSession(req.body);
      res.status(200).json(savedSession);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create session" });
    }
  }

  // Update an existing chat session
  async updateSession(req, res) {
    try {
      const updatedSession = await userChatSessionService.updateSession(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedSession);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update session" });
    }
  }

  // Delete a chat session
  async deleteSession(req, res) {
    try {
      await userChatSessionService.deleteSession(req.params.id);
      res.status(200).json("Session has been deleted.");
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to delete session" });
    }
  }

  // Get a chat session by its ID
  async getSessionById(req, res) {
    try {
      const session = await userChatSessionService.getSessionById(req.params.id);
      res.status(200).json(session);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch session" });
    }
  }

  // Get all chat sessions with optional filters
  async getAllSessions(req, res) {
    try {
      const sessions = await userChatSessionService.getAllSessions(req.query);
      res.status(200).json(sessions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch sessions" });
    }
  }

  // Get chat sessions by name (filter by user name)
  async getSessionsByName(req, res) {
    try {
      const sessions = await userChatSessionService.getSessionsByName(req.params.name);
      res.status(200).json(sessions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch sessions by name" });
    }
  }

  // Get chat sessions with keyword summary
  async getSessionsWithKeywordSummary(req, res) {
    try {
      const sessions = await userChatSessionService.getSessionsWithKeywordSummary(req.query);
      res.status(200).json(sessions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch sessions with keyword summary" });
    }
  }
}

module.exports = new UserChatSessionController();
