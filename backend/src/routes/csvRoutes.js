const express = require('express');
const multer = require('multer');
const csvController = require('../controllers/csvController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: function(req, file, cb) {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

router.post('/upload', upload.single('csvFile'), csvController.uploadCSV);
router.post('/process', csvController.processCSV);

module.exports = router;
