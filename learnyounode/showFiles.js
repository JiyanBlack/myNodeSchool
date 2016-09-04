var fs = require('fs');

function showFiles(path, extension, callback) {
  fs.readdir(path, function(err, files) {
    if (err) return callback(err);
    let result = files.filter(x => {
      if (new RegExp('.' + extension + '$').exec(x)) return true;
      else return false;
    });
    callback(null, result);
  })
}

module.exports = showFiles;
