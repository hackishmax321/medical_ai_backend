const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  file_path: { type: String, required: true },
  session: { type: String, required: true },
  uploadedBy: { type: String, default: 'system'},
  url: { type: String }, 
  created_at: { type: Date, default: Date.now }
});

const Document = mongoose.model('Document', DocumentSchema);
module.exports = Document;
