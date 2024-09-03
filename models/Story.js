const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema(
  {
    user: { type: String, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    postedDate: { type: String, required: true }, 
    keys: { type: [String], default: [] },
    activities: [{
      type: new mongoose.Schema({
        name: { type: String, required: true },
        date: { type: String, required: true },
        details: { type: String }
      }, { _id: false })  
    }],
    status: { type: String, required: true, enum: ['draft', 'published', 'archived'], default: 'draft' }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Story", StorySchema);
