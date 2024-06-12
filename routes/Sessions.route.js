const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/Session.controller");

router.post("/", sessionController.createSession);
router.patch("/:id", sessionController.updateSession);
router.delete("/:id", sessionController.deleteSession);
router.get("/find/:id", sessionController.getSessionById);
router.get("/", sessionController.getAllSessions);
router.get("/doctor/:doctor", sessionController.getSessionsByDoctor);
router.get("/patient/:patient", sessionController.getSessionsByPatient);

module.exports = router;
