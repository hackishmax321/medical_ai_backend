const express = require("express");
const router = express.Router();
const patientController = require("../controllers/Patient.controller");

router.post("/", patientController.createPatient);
router.patch("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);
router.get("/find/:id", patientController.getPatientById);
router.get("/", patientController.getAllPatients);

module.exports = router;
