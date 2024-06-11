const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    name: {
        type: String,
        required: true,
    },
    email: { type: String, required: true, unique: true },
    contact: { type: String },
    password: { type: String, required: true },
    avatar: { type: String, default: 'https://cdn-icons-png.flaticon.com/512/4715/4715330.png'},
    specialization: {
        type: String,
        required: true,
    },
    qualifications: {
        type: [String],
    },
    keywords: { type: [String], default: []},
    approved: { type: Boolean, default: false },
});

module.exports = mongoose.model("Doctor", doctorSchema);
