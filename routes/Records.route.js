const express = require("express");
const router = express.Router();
const recordController = require("../controllers/Records.controller");
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

router.post("/", recordController.createRecord);
router.patch("/:id", recordController.updateRecord);
router.post(
  "/:id/uploadImage",
  upload.single("recordImage"),
  recordController.uploadRecordImage
);
router.delete("/:id", recordController.deleteRecord);
router.get("/find/:id", recordController.getRecordById);
router.get("/", recordController.getAllRecords);
router.get("/ofPatient/:user", recordController.getAllRecordsOfPatient);

module.exports = router;
