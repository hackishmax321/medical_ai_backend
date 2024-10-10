const mongoose = require('mongoose');

// Define the schema for user_chat_sessions
const UserChatSessionSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Example: "66f2c7d30f8ebe5eb614f14f"
  date: { type: Date, required: true }, // Example: "2024-10-01"
  rate: { type: Number }, // Example: 5
  isObserved: { type: Boolean, default: false }, // Example: false
  answers: { type: [String], default: [] }, // Example: Array of 21 answers
  polarity_scores: { type: [Number] }, // Example: Array of 21 scores
  keywords_found:{ type: [String], default: [] }, // Example: Object for keywords
  interference_score: { type: Number, default: 0 }, // Example: 1
  resistance_score: { type: Number, default: 0 }, // Example: 1
  control_score: { type: Number, default: 0 }, // Example: 1
  compulsion_score: { type: Number, default: 0 }, // Example: 1
  condition: { type: String }, // Example: "Need More Attention"
  scheduled_actions: { type: [String], default: [] }, // Example: Array of actions (1 action in this case)
  ocd_probabilities: { type: [Number]}, // Example: Array of 5 probabilities
  created_at: { type: Date, default: Date.now } // Automatically set the creation date
});

// Create a model based on the schema
const UserChatSession = mongoose.model('User_Chat_Session', UserChatSessionSchema);

// Export the model for use in other parts of the application
module.exports = UserChatSession;
