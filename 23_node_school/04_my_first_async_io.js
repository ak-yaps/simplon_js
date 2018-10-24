/*jshint esversion:6*/

//nodeschool my first async io
const fs = require("fs");
const file = process.argv[2];
fs.readFile(file, 'utf8', function (err, data) {
  var fileToRead = data.split('\n').length -1;
  console.log(fileToRead);
 });
