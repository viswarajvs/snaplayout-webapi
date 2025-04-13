const Layout = require('../models/Layout');

// Get layout by type
exports.getLayoutByType = async (req, res) => {
  try {
    const layout = await Layout.findOne({ type: req.params.type });
    if (!layout) return res.status(404).json({ error: 'Layout not found' });

    res.json(layout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all files
exports.getFiles = async (req, res) => {
  try {
    const files = await Layout.find().sort({ uploadedAt: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Upload a new layout
exports.uploadLayout = async (req, res) => {
    try {
        const { type, filename, layout } = req.body;
        const newLayout = new Layout({ type, filename, layout });
        await newLayout.save();
        res.status(201).json(newLayout);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Delete a layout by type
exports.deleteLayoutByType = async (req, res) => {
    try {
        const layout = await Layout.findOneAndDelete({ type: req.params.type });
        if (!layout) return res.status(404).json({ error: 'Layout not found' });

        res.json({ message: 'Layout deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a layout by type
exports.updateLayoutByType = async (req, res) => {
    try {
        const { content } = req.body;
        const layout = await Layout.findOneAndUpdate(
            { type: req.params.type },
            { content },
            { new: true }
        );
        if (!layout) return res.status(404).json({ error: 'Layout not found' });

        res.json(layout);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};