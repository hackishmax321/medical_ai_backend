const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, ref: 'User', required: true },
    tags: { type: [String], default: [] },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    published: { type: Boolean, default: false },
    publishedAt: { type: Date },
    image: { type: String, default: 'https://cdn-icons-png.flaticon.com/512/326/326020.png' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogPost", BlogPostSchema);