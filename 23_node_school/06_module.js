/*jshint esversion: 6*/
const fs = require('fs');
const path =  require('path');

module.exports =
  function(dir, fileToRead, clbk) {
    fs.readdir(dir, (err, list) => {
      if (err)
        return clbk(err);

      list = list.filter((file) => {
        return path.extname(file) === '.' + fileToRead;
      });

      clbk(null, list);

    });
  };
