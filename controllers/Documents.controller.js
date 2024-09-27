const documentService = require("../services/Documents.service");

class DocumentController {
  // Create a new document
  async createDocument(req, res) {
    try {
      const savedDocument = await documentService.createDocument(req.body);
      res.status(200).json(savedDocument);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  // Update an existing document
  async updateDocument(req, res) {
    try {
      const updatedDocument = await documentService.updateDocument(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedDocument);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  // Delete a document
  async deleteDocument(req, res) {
    try {
      await documentService.deleteDocument(req.params.id);
      res.status(200).json("Document has been deleted.");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  // Get a document by its ID
  async getDocumentById(req, res) {
    try {
      const document = await documentService.getDocumentById(req.params.id);
      res.status(200).json(document);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  async getDocumentsBySession(req, res) {
    try {
      const sessionId = req.params.sessionId; // Extract sessionId from URL params
      const documents = await documentService.getDocumentsBySession(sessionId);
      res.status(200).json(documents);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch documents by session" });
    }
  }

  // Get all documents
  async getAllDocuments(req, res) {
    try {
      const documents = await documentService.getAllDocuments(req.query);
      res.status(200).json(documents);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  // Get all documents for a specific session
//   async getDocumentsBySession(req, res) {
//     try {
//       const documents = await documentService.getDocumentsBySession(req.params.sessionId);
//       res.status(200).json(documents);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }

  // Get documents with preview logic (image or file download)
  async getDocumentsWithPreview(req, res) {
    try {
      const documents = await documentService.getDocumentsWithPreview(req.query);
      res.status(200).json(documents);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new DocumentController();
