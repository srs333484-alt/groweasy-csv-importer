const csvParser = require('../services/csvParser');
const aiService = require('../services/aiService');

exports.uploadCSV = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        error: 'No CSV file uploaded' 
      });
    }

    const records = await csvParser.parseBuffer(req.file.buffer);
    
    if (!records || records.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'CSV file is empty or invalid' 
      });
    }

    const preview = records.slice(0, 10);
    
    res.json({
      success: true,
      totalRows: records.length,
      preview: preview,
      headers: Object.keys(preview[0] || {}),
      records: records
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to process CSV: ' + error.message 
    });
  }
};

exports.processCSV = async (req, res) => {
  try {
    const { records } = req.body;
    
    if (!records || records.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No records to process' 
      });
    }

    const batchSize = 10;
    const results = [];
    let skipped = 0;

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      try {
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
};  }
};

exports.processCSV = async (req, res) => {
  try {
    const { records } = req.body;
    
    if (!records || records.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No records to process' 
      });
    }

    const batchSize = 10;
    const results = [];
    let skipped = 0;

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      try {
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
};  }
};

exports.processCSV = async (req, res) => {
  try {
    const { records } = req.body;
    
    if (!records || records.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No records to process' 
      });
    }

    const batchSize = 10;
    const results = [];
    let skipped = 0;

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      try {
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
};      error: 'Failed to process CSV: ' + error.message 
    });
  }
};

exports.processCSV = async (req, res) => {
  try {
    const { records } = req.body;
    
    if (!records || records.length === 0) {
      return res.status(400).json({ 
        success: false, 
        error: 'No records to process' 
      });
    }

    // Process in batches (10 records per batch)
    const batchSize = 10;
    const results = [];
    let skipped = 0;

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      try {
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
