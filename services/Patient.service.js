const Patient = require("../models/User");
const CryptoJS = require("crypto-js");

class PatientService {
  async createPatient(patientData) {
    const newPatient = new Patient(patientData);
    try {
      newPatient.password = CryptoJS.AES.encrypt(
          newPatient.password,
          process.env.PASS_SEC
        ).toString();
      const savedPatient = await newPatient.save();
      return savedPatient;
    } catch (err) {
      throw err;
    }
  }

  async updatePatient(id, updatedData) {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedPatient;
    } catch (err) {
      throw err;
    }
  }

  async deletePatient(id) {
    try {
      await Patient.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getPatientById(id) {
    try {
      const patient = await Patient.findById(id);
      return patient;
    } catch (err) {
      throw err;
    }
  }

  async getAllPatients() {
    try {
        const patient = await Patient.find();
        return patient;
    } catch (err) {
      throw err;
    }
  }
  
}

module.exports = new PatientService();
