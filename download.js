const fs = require('fs');
const request = require('request');

const download = (url, path, callback) => {
  request.head(url, (error, res, body) => {
    console.error('error:', error);
    request(url)
      .pipe(fs.WriteStream(path))
      .on('close', callback)
  });
};

module.exports = {
  download
};