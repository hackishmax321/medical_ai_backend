const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/Blogpost.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/assets/uploads"); 
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
});

router.post("/", blogPostController.createBlogPost);
router.patch("/:id", blogPostController.updateBlogPost);
router.post(
  "/:id/uploadImage",
  upload.single("blogPostImage"),
  blogPostController.uploadBlogPostImage
);
router.delete("/:id", blogPostController.deleteBlogPost);
router.get("/find/:id", blogPostController.getBlogPostById);
router.get("/", blogPostController.getAllBlogPosts);

module.exports = router;
