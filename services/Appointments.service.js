const Appointment = require("../models/Appointment");

class AppointmentService {
  async createAppointment(appointmentData) {
    const newAppointment = new Appointment(appointmentData);
    try {
      const savedAppointment = await newAppointment.save();
      return savedAppointment;
    } catch (err) {
      throw err;
    }
  }

  async updateAppointment(id, updatedData) {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedAppointment;
    } catch (err) {
      throw err;
    }
  }

  async uploadAppointmentImage(id, imagePath) {
    try {
      // Implement cloudinary upload logic here
      let img = {image: imagePath};

      // Update Appointment with image URL
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        id,
        {
          $set: { images: [img] },
        },
        { new: true }
      );

      return updatedAppointment;
    } catch (err) {
      throw err;
    }
  }

  async deleteAppointment(id) {
    try {
      await Appointment.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getAppointmentById(id) {
    try {
      const appointment = await Appointment.findById(id);
      return appointment;
    } catch (err) {
      throw err;
    }
  }

  async getAllAppointments(query) {
    try {
      let appointments;
      appointments = await Appointment.find();

      return appointments;
    } catch (err) {
      throw err;
    }
  }

  async getAllAppointmentsOfPatient(user) {
    try {
        console.log(user)
      let appointments = await Appointment.find({user: user});

      return appointments;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AppointmentService();
