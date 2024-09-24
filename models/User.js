const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    fullName: { type: String, required: true },
    gender: { type: String, default: "Male" },
    age: { type: Number, default: 15 },
    email: { type: String, required: true, unique: true },
    contact: { type: String },
    keywords: { type: [String], default: []},
    assigned: { type: String, default: ''},
    password: { type: String, required: true },
    avatar: { type: String, default: 'https://cdn-icons-png.flaticon.com/512/4715/4715330.png'},
    status: { type: String, default: 'initial' },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
