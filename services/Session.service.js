const Session = require("../models/Session");

class SessionService {
  async createSession(sessionData) {
    const newSession = new Session(sessionData);
    try {
      const savedSession = await newSession.save();
      return savedSession;
    } catch (err) {
      throw err;
    }
  }

  async updateSession(id, updatedData) {
    try {
      const updatedSession = await Session.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedSession;
    } catch (err) {
      throw err;
    }
  }

  async deleteSession(id) {
    try {
      await Session.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getSessionById(id) {
    try {
      const session = await Session.findById(id);
      return session;
    } catch (err) {
      throw err;
    }
  }

  async getAllSessions() {
    try {
      const sessions = await Session.find();
      return sessions;
    } catch (err) {
      throw err;
    }
  }

  async getSessionsByDoctor(doctor) {
    try {
      const sessions = await Session.find({ doctor });
      return sessions;
    } catch (err) {
      throw err;
    }
  }

  async getSessionsByPatient(patient) {
    try {
      const sessions = await Session.find({ patient });
      return sessions;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new SessionService();
