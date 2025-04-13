const File = require('../models/File');

// Upload JSON
exports.uploadFile = async (req, res) => {
  try {
    const { filename, type, json } = req.body;

    const file = new File({ filename, type, json });
    await file.save();

    res.status(201).json({ message: 'File uploaded', file });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed', details: err.message });
  }
};

// Get all files
exports.getFiles = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadedAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Download single file by ID
exports.downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ error: 'File not found' });

    res.json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Delete file by ID
exports.deleteFile = async (req, res) => {
    try {
        const file = await File.findByIdAndDelete(req.params.id);
        if (!file) return res.status(404).json({ error: 'File not found' });

        res.json({ message: 'File deleted', file });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};