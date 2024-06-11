const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/Doctor.controller");

router.post("/", doctorController.createDoctor);
router.patch("/:id", doctorController.updateDoctor);
router.delete("/:id", doctorController.deleteDoctor);
router.get("/find/:id", doctorController.getDoctorById);
router.get("/", doctorController.getAllDoctors);

module.exports = router;
