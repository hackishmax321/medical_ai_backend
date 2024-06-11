const appointmentService = require("../services/Appointments.service");

class AppointmentController {
  async createAppointment(req, res) {
    try {
      const savedAppointment = await appointmentService.createAppointment(req.body);
      res.status(200).json(savedAppointment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateAppointment(req, res) {
    try {
      const updatedAppointment = await appointmentService.updateAppointment(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedAppointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async uploadAppointmentImage(req, res) {
    try {
      const updatedAppointment = await appointmentService.uploadAppointmentImage(
        req.params.id,
        req.file.path
      );
      res.status(200).json(updatedAppointment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async deleteAppointment(req, res) {
    try {
      await appointmentService.deleteAppointment(req.params.id);
      res.status(200).json("Appointment has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAppointmentById(req, res) {
    try {
      const appointment = await appointmentService.getAppointmentById(req.params.id);
      res.status(200).json(appointment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllAppointments(req, res) {
    try {
      const appointments = await appointmentService.getAllAppointments(req.query);
      res.status(200).json(appointments);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getAllAppointmentsOfPatient(req, res) {
    try {
      const appointments = await appointmentService.getAllAppointmentsOfPatient(req.params.user);
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = new AppointmentController();
