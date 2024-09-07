const express = require("express");
const router = express.Router();
const messageController = require("../controllers/Messages.controller");

router.post("/", messageController.createMessage);
router.patch("/:id", messageController.updateMessage);
router.delete("/:id", messageController.deleteMessage);
router.get("/find/:id", messageController.getMessageById);
router.get("/", messageController.getAllMessages);
router.get("/sender/:senderId", messageController.getMessagesBySender);
router.get("/receiver/:receiverId", messageController.getMessagesByReceiver);
router.patch("/read/:id", messageController.markMessageAsRead);

module.exports = router;
