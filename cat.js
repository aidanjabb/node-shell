const fs = require('fs');
function cat(fileName, done) {
  fs.readFile(fileName, 'utf8', (err, file) => {
    if (err) {
        throw err;
    } else {
        done(file);
    }
  })
}

module.exports = cat;