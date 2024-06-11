const Doctor = require("../models/Doctor");
const CryptoJS = require("crypto-js");

class DoctorService {
  async createDoctor(doctorData) {
    const newDoctor = new Doctor(doctorData);
    try {
      newDoctor.password = CryptoJS.AES.encrypt(
        newDoctor.password,
        process.env.PASS_SEC
      ).toString();
      const savedDoctor = await newDoctor.save();
      return savedDoctor;
    } catch (err) {
      throw err;
    }
  }

  async updateDoctor(id, updatedData) {
    try {
      const updatedDoctor = await Doctor.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedDoctor;
    } catch (err) {
      throw err;
    }
  }

  async deleteDoctor(id) {
    try {
      await Doctor.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getDoctorById(id) {
    try {
      const doctor = await Doctor.findById(id);
      return doctor;
    } catch (err) {
      throw err;
    }
  }

  async getAllDoctors() {
    try {
        const doctor = await Doctor.find();
        return doctor;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new DoctorService();
