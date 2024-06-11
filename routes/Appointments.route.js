const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/Appointments.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/assets/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

router.post("/", appointmentController.createAppointment);
router.patch("/:id", appointmentController.updateAppointment);
router.post(
  "/:id/uploadImage",
  upload.single("appointmentImage"),
  appointmentController.uploadAppointmentImage
);
router.delete("/:id", appointmentController.deleteAppointment);
router.get("/find/:id", appointmentController.getAppointmentById);
router.get("/", appointmentController.getAllAppointments);
router.get("/ofPatient/:user", appointmentController.getAllAppointmentsOfPatient);

module.exports = router;
