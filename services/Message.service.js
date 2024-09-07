const Message = require("../models/Message");

class MessageService {
  async createMessage(messageData) {
    const newMessage = new Message(messageData);
    try {
      const savedMessage = await newMessage.save();
      return savedMessage;
    } catch (err) {
      throw err;
    }
  }

  async updateMessage(id, updatedData) {
    try {
      const updatedMessage = await Message.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true }
      );
      return updatedMessage;
    } catch (err) {
      throw err;
    }
  }

  async deleteMessage(id) {
    try {
      await Message.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getMessageById(id) {
    try {
      const message = await Message.findById(id);
      return message;
    } catch (err) {
      throw err;
    }
  }

  async getAllMessages() {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      return messages;
    } catch (err) {
      throw err;
    }
  }

  async getMessagesBySender(senderId) {
    try {
      const messages = await Message.find({ sender: senderId }).sort({ createdAt: -1 });
      return messages;
    } catch (err) {
      throw err;
    }
  }

  async getMessagesByReceiver(receiverId) {
    try {
      const messages = await Message.find({ receiver: receiverId }).sort({ createdAt: -1 });
      return messages;
    } catch (err) {
      throw err;
    }
  }

  async markMessageAsRead(id) {
    try {
      const message = await Message.findByIdAndUpdate(
        id,
        { $set: { isRead: true } },
        { new: true }
      );
      return message;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new MessageService();
