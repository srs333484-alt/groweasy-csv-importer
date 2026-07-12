const express = require('express');
const multer = require('multer');
const csvController = require('../controllers/csvController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/csv' || file.originalname.endsWith('.csv')) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'), false);
    }
  }
});

router.post('/upload', upload.single('csvFile'), csvController.uploadCSV);
router.post('/process', csvController.processCSV);

module.exports = router;      try {
        const processed = await aiService.extractCRMData(batch);
        if (processed && processed.length > 0) {
          results.push(...processed);
        }
      } catch (error) {
        console.error('Batch processing error:', error);
        skipped += batch.length;
      }
    }

    res.json({
      success: true,
      total: records.length,
      imported: results.length,
      skipped: records.length - results.length,
      records: results
    });
  } catch (error) {
    console.error('Processing error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process records: ' + error.message 
    });
  }
};
