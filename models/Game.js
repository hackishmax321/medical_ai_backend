const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema(
  {
    name: { type: String },
    date: { type: String, required: true },
    user: { type: String, required: true },
    doctor: { type: String },
    yScore: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
    answers: { type: [Number], default: [] },
    result: { type: String, default: "" },
    other: { type: String, default: "" },
    accepted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", GameSchema);
