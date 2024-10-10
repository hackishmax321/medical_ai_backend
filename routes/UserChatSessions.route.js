const express = require("express");
const router = express.Router();
const userChatSessionController = require("../controllers/UserChatSession.controller");

// Create a new chat session
router.post("/", userChatSessionController.createSession);

// Update an existing chat session by ID
router.patch("/:id", userChatSessionController.updateSession);

// Delete a chat session by ID
router.delete("/:id", userChatSessionController.deleteSession);

// Get a chat session by ID
router.get("/find/:id", userChatSessionController.getSessionById);

// Get all chat sessions
router.get("/", userChatSessionController.getAllSessions);

// Get all chat sessions for a specific user by name
router.get("/name/:name", userChatSessionController.getSessionsByName);

// Get sessions with keyword summary (special logic)
router.get("/summary", userChatSessionController.getSessionsWithKeywordSummary);

module.exports = router;
