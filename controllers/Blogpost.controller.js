const blogPostService = require("../services/BlogPost.service");

class BlogPostController {
  async createBlogPost(req, res) {
    try {
      const savedBlogPost = await blogPostService.createBlogPost(req.body);
      res.status(200).json(savedBlogPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async updateBlogPost(req, res) {
    try {
      const updatedBlogPost = await blogPostService.updateBlogPost(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedBlogPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async deleteBlogPost(req, res) {
    try {
      await blogPostService.deleteBlogPost(req.params.id);
      res.status(200).json("Blog post has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getBlogPostById(req, res) {
    try {
      const blogPost = await blogPostService.getBlogPostById(req.params.id);
      res.status(200).json(blogPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAllBlogPosts(req, res) {
    try {
      const blogPosts = await blogPostService.getAllBlogPosts(req.query);
      res.status(200).json(blogPosts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new BlogPostController();
