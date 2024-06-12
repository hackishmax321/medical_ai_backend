const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema(
  {
    doctor: { type: String, required: true }, 
    patient: { type: String, required: true }, 
    day: { type: String, required: true },
    date: { type: Date, required: true },
    timeperiod: { type: String, required: true },
    accepted: { type: Boolean, default: false },
    link: { type: String, default: '' },
    details: { type: String, default: '' },
    keywords: { type: [String], default: [] }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", SessionSchema);
