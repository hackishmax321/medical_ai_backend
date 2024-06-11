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
      let blogPosts;
      blogPosts = await BlogPost.find();

      return blogPosts;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new BlogPostService();
