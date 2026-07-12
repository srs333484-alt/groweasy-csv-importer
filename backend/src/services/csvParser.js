const csv = require('csv-parser');
const { Readable } = require('stream');

exports.parseBuffer = (buffer) => {
  return new Promise((resolve, reject) => {
    const results = [];
    const readable = Readable.from(buffer.toString());
    
    readable
      .pipe(csv())
      .on('data', (data) => {
        const cleanData = {};
        Object.keys(data).forEach(key => {
          const cleanKey = key.replace(/^\uFEFF/, '').trim();
          cleanData[cleanKey] = data[key] ? data[key].toString().trim() : '';
        });
        results.push(cleanData);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
