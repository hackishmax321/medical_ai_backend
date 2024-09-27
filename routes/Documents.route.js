const express = require("express");
const router = express.Router();
const documentController = require("../controllers/Documents.controller");
const path = require("path");

// Create a new document
router.post("/", documentController.createDocument);

// Update an existing document by ID
router.patch("/:id", documentController.updateDocument);

// Delete a document by ID
router.delete("/:id", documentController.deleteDocument);

// Get a document by ID
router.get("/find/:id", documentController.getDocumentById);

// Get all documents
router.get("/", documentController.getAllDocuments);

// Get all documents for a specific session
router.get("/session/:sessionId", documentController.getDocumentsBySession);


// Get documents with preview logic (either image or file icon)
router.get("/preview", documentController.getDocumentsWithPreview);

module.exports = router;
