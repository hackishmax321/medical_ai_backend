const sessionService = require("../services/Session.service");

class SessionController {
  async createSession(req, res) {
    try {
      const savedSession = await sessionService.createSession(req.body);
      res.status(200).json(savedSession);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateSession(req, res) {
    try {
      const updatedSession = await sessionService.updateSession(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedSession);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteSession(req, res) {
    try {
      await sessionService.deleteSession(req.params.id);
      res.status(200).json("Session has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getSessionById(req, res) {
    try {
      const session = await sessionService.getSessionById(req.params.id);
      res.status(200).json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllSessions(req, res) {
    try {
      const sessions = await sessionService.getAllSessions();
      res.status(200).json(sessions);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getSessionsByDoctor(req, res) {
    try {
      const sessions = await sessionService.getSessionsByDoctor(req.params.doctor);
      res.status(200).json(sessions);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getSessionsByPatient(req, res) {
    try {
      const sessions = await sessionService.getSessionsByPatient(req.params.patient);
      res.status(200).json(sessions);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new SessionController();
