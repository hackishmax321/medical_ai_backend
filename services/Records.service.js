const Record = require("../models/Record");

class RecordService {
  async createRecord(recordData) {
    const newRecord = new Record(recordData);
    try {
      const savedRecord = await newRecord.save();
      return savedRecord;
    } catch (err) {
      throw err;
    }
  }

  async updateRecord(id, updatedData) {
    try {
      const updatedRecord = await Record.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedRecord;
    } catch (err) {
      throw err;
    }
  }

  async uploadRecordImage(id, imagePath) {
    try {
      // Implement cloudinary upload logic here
      let img = {image: imagePath};

      // Update Record with image URL
      const updatedRecord = await Record.findByIdAndUpdate(
        id,
        {
          $set: { images: [img] },
        },
        { new: true }
      );

      return updatedRecord;
    } catch (err) {
      throw err;
    }
  }

  async deleteRecord(id) {
    try {
      await Record.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getRecordById(id) {
    try {
      const record = await Record.findById(id);
      return record;
    } catch (err) {
      throw err;
    }
  }

  async getAllRecords(query) {
    try {
      let records;
      records = await Record.find();

      return records;
    } catch (err) {
      throw err;
    }
  }

  async getAllRecordsOfPatient(user) {
    try {
        console.log(user)
      let records = await Record.find({user: user});

      return records;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new RecordService();
