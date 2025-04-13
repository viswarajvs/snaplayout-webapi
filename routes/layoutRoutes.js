const express = require('express');
const router = express.Router();
const layoutController = require('../controllers/layoutController');

router.get('/', layoutController.getFiles);
router.get('/:type', layoutController.getLayoutByType);
router.post('/upload', layoutController.uploadLayout);
router.delete('/:type', layoutController.deleteLayoutByType);
router.put('/:type', layoutController.updateLayoutByType);

module.exports = router;