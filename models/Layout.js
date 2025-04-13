const mongoose = require('mongoose');

const LayoutSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  type: { type: String, required: true, unique: true },
  layout: { type: Object, required: true },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Layout', LayoutSchema);
