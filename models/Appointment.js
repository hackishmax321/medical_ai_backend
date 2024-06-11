const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    user: { type: String, required: true},
    userName: { type: String },
    doctor: { type: String, required: true},
    doctorName: { type: String},
    desc: { type: String },
    images: { type: [Object], default: [] },
    verified: { type: Boolean, default: false },
    selectedDate: { type: Date }, 
    selectedTime: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", AppointmentSchema);
