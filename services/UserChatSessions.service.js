const UserChatSession = require("../models/UserChatSesion");

class UserChatSessionService {
  // Create a new user chat session
  async createSession(sessionData) {
    const newSession = new UserChatSession(sessionData);
    try {
      const savedSession = await newSession.save();
      return savedSession;
    } catch (err) {
      throw err;
    }
  }

  // Update an existing session
  async updateSession(id, updatedData) {
    try {
      const updatedSession = await UserChatSession.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true }
      );
      return updatedSession;
    } catch (err) {
      throw err;
    }
  }

  // Fetch session by ID
  async getSessionById(id) {
    try {
      const session = await UserChatSession.findById(id);
      return session;
    } catch (err) {
      throw err;
    }
  }

  // Fetch sessions by user name
  async getSessionsByName(name) {
    try {
      const sessions = await UserChatSession.find({ name });
      return sessions;
    } catch (err) {
      throw err;
    }
  }

  // Fetch all user chat sessions with optional filtering
  async getAllSessions(query) {
    try {
      const sessions = await UserChatSession.find(query);
      return sessions;
    } catch (err) {
      throw err;
    }
  }

  // Delete a session by ID
  async deleteSession(id) {
    try {
      await UserChatSession.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  // Load sessions with keyword summary logic
  async getSessionsWithKeywordSummary(query) {
    try {
      const sessions = await this.getAllSessions(query);

      // Example: Add logic for keyword analysis or summaries
      const processedSessions = sessions.map((session) => {
        const keywordSummary = this.getKeywordSummary(session.keywords_found);
        session.keywordSummary = keywordSummary;
        return session;
      });

      return processedSessions;
    } catch (err) {
      throw err;
    }
  }

  // Helper to generate a summary of keywords found
  getKeywordSummary(keywords) {
    if (typeof keywords === "object") {
      return Object.keys(keywords).join(", "); // Concatenate keywords
    }
    return "";
  }
}

module.exports = new UserChatSessionService();
