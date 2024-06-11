const LabAssistant = require("../models/LabAssistant");
const CryptoJS = require("crypto-js");

class LabAssistantService {
  async createLabAssistant(labAssistantData) {
    const newLabAssistant = new LabAssistant(labAssistantData);
    try {
      newLabAssistant.password = CryptoJS.AES.encrypt(
        newLabAssistant.password,
        process.env.PASS_SEC
      ).toString();
      const savedLabAssistant = await newLabAssistant.save();
      return savedLabAssistant;
    } catch (err) {
      throw err;
    }
  }

  async updateLabAssistant(id, updatedData) {
    try {
      const updatedLabAssistant = await LabAssistant.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedLabAssistant;
    } catch (err) {
      throw err;
    }
  }

  async deleteLabAssistant(id) {
    try {
      await LabAssistant.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getLabAssistantById(id) {
    try {
      const labAssistant = await LabAssistant.findById(id);
      return labAssistant;
    } catch (err) {
      throw err;
    }
  }

  async getAllLabAssistants() {
    try {
        const labAssistant = await LabAssistant.find();
        return labAssistant;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new LabAssistantService();
