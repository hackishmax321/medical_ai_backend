const Document = require("../models/Document");

class DocumentService {
  // Create a new document
  async createDocument(documentData) {
    const newDocument = new Document(documentData);
    try {
      const savedDocument = await newDocument.save();
      return savedDocument;
    } catch (err) {
      throw err;
    }
  }

  // Update an existing document
  async updateDocument(id, updatedData) {
    try {
      const updatedDocument = await Document.findByIdAndUpdate(
        id,
        {
          $set: updatedData,
        },
        { new: true }
      );
      return updatedDocument;
    } catch (err) {
      throw err;
    }
  }

  // Fetch document by ID
  async getDocumentById(id) {
    try {
      const document = await Document.findById(id);
      return document;
    } catch (err) {
      throw err;
    }
  }

  async getDocumentsBySession(sessionId) {
    try {
      const documents = await Document.find({ session: sessionId });
      return documents;
    } catch (err) {
      throw err;
    }
  }

  // Fetch all documents, optionally with query filtering
  async getAllDocuments(query) {
    try {
      const documents = await Document.find(query);
      return documents;
    } catch (err) {
      throw err;
    }
  }

  // Fetch all documents for a specific session
//   async getDocumentsBySession(sessionId) {
//     try {
//       const documents = await Document.find({ session: sessionId });
//       return documents;
//     } catch (err) {
//       throw err;
//     }
//   }

  // Delete a document by ID
  async deleteDocument(id) {
    try {
      await Document.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }

  // Helper to check if the document URL is an image
  isImage(url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) !== null;
  }

  // Load documents with preview logic (image preview or download icon)
  async getDocumentsWithPreview(query) {
    try {
      const documents = await this.getAllDocuments(query);

      // Add preview logic (image or download icon)
      const processedDocuments = documents.map((doc) => {
        if (this.isImage(doc.url)) {
          doc.previewType = "image"; // Mark it as image for UI
        } else {
          doc.previewType = "file"; // Mark it as file for download icon
        }
        return doc;
      });

      return processedDocuments;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new DocumentService();
