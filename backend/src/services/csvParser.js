const csv = require('csv-parser');
const { Readable } = require('stream');

exports.parseBuffer = function(buffer) {
  return new Promise(function(resolve, reject) {
    const results = [];
    const readable = Readable.from(buffer.toString());

    readable
      .pipe(csv())
      .on('data', function(data) {
        const cleanData = {};
        Object.keys(data).forEach(function(key) {
          const cleanKey = key.replace(/^\uFEFF/, '').trim();
          cleanData[cleanKey] = data[key] ? data[key].toString().trim() : '';
        });
        results.push(cleanData);
      })
      .on('end', function() {
        resolve(results);
      })
      .on('error', function(error) {
        reject(error);
      });
  });
};
