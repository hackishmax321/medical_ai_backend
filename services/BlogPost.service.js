const BlogPost = require("../models/BlogPost");

class BlogPostService {
  async createBlogPost(blogPostData) {
    const newBlogPost = new BlogPost(blogPostData);
    try {
      const savedBlogPost = await newBlogPost.save();
      return savedBlogPost;
    } catch (err) {
      throw err;
    }
  }

  async updateBlogPost(id, updatedData) {
    try {
      const updatedBlogPost = await BlogPost.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedBlogPost;
    } catch (err) {
      throw err;
    }
  }

  async deleteBlogPost(id) {
    try {
      await BlogPost.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  async getBlogPostById(id) {
    try {
      const blogPost = await BlogPost.findById(id);
      return blogPost;
    } catch (err) {
      throw err;
    }
  }

  async getAllBlogPosts(query) {
    try {
      const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
      return blogPosts;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new BlogPostService();
