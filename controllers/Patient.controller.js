const patientService = require("../services/Patient.service");

class PatientController {
  async createPatient(req, res) {
    try {
      const savedPatient = await patientService.createPatient(req.body);
      res.status(200).json(savedPatient);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updatePatient(req, res) {
    try {
      const updatedPatient = await patientService.updatePatient(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedPatient);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deletePatient(req, res) {
    try {
      await patientService.deletePatient(req.params.id);
      res.status(200).json("Patient has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getPatientById(req, res) {
    try {
      const patient = await patientService.getPatientById(req.params.id);
      res.status(200).json(patient);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllPatients(req, res) {
    try {
      const patients = await patientService.getAllPatients();
      res.status(200).json(patients);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new PatientController();
