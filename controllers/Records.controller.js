const recordService = require("../services/Records.service");

class RecordController {
  async createRecord(req, res) {
    try {
      const savedRecord = await recordService.createRecord(req.body);
      res.status(200).json(savedRecord);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateRecord(req, res) {
    try {
      const updatedRecord = await recordService.updateRecord(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedRecord);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async uploadRecordImage(req, res) {
    try {
      const updatedRecord = await recordService.uploadRecordImage(
        req.params.id,
        req.file.path
      );
      res.status(200).json(updatedRecord);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async deleteRecord(req, res) {
    try {
      await recordService.deleteRecord(req.params.id);
      res.status(200).json("Record has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getRecordById(req, res) {
    try {
      const record = await recordService.getRecordById(req.params.id);
      res.status(200).json(record);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllRecords(req, res) {
    try {
      const records = await recordService.getAllRecords(req.query);
      res.status(200).json(records);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getAllRecordsOfPatient(req, res) {
    try {
      const records = await recordService.getAllRecordsOfPatient(req.params.user);
      res.status(200).json(records);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new RecordController();
