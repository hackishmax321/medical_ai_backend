const messageService = require("../services/Message.service");

class MessageController {
  async createMessage(req, res) {
    try {
      const savedMessage = await messageService.createMessage(req.body);
      res.status(200).json(savedMessage);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateMessage(req, res) {
    try {
      const updatedMessage = await messageService.updateMessage(req.params.id, req.body);
      res.status(200).json(updatedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteMessage(req, res) {
    try {
      await messageService.deleteMessage(req.params.id);
      res.status(200).json("Message has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getMessageById(req, res) {
    try {
      const message = await messageService.getMessageById(req.params.id);
      res.status(200).json(message);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllMessages(req, res) {
    try {
      const messages = await messageService.getAllMessages();
      res.status(200).json(messages);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getMessagesBySender(req, res) {
    try {
      const messages = await messageService.getMessagesBySender(req.params.senderId);
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getMessagesByReceiver(req, res) {
    try {
      const messages = await messageService.getMessagesByReceiver(req.params.receiverId);
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async markMessageAsRead(req, res) {
    try {
      const updatedMessage = await messageService.markMessageAsRead(req.params.id);
      res.status(200).json(updatedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new MessageController();
