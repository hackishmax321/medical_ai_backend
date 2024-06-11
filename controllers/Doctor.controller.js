const doctorService = require("../services/Doctor.service");

class DoctorController {
  async createDoctor(req, res) {
    try {
      const savedDoctor = await doctorService.createDoctor(req.body);
      res.status(200).json(savedDoctor);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateDoctor(req, res) {
    try {
      const updatedDoctor = await doctorService.updateDoctor(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedDoctor);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteDoctor(req, res) {
    try {
      await doctorService.deleteDoctor(req.params.id);
      res.status(200).json("Doctor has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getDoctorById(req, res) {
    try {
      const doctor = await doctorService.getDoctorById(req.params.id);
      res.status(200).json(doctor);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllDoctors(req, res) {
    try {
      const doctors = await doctorService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new DoctorController();
