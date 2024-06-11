const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema(
  {
    user: { type: String, required: true},
    userName: { type: String },
    issuedBy: { type: String, required: true},
    issuedByName: { type: String},
    desc: { type: String },
    images: { type: [Object], default: [] },
    category: { type: String },
    prescriptions: { type: [Object], default: []},
    served: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", RecordSchema);
