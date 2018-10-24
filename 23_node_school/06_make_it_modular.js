/*jshint esversion:6*/
var myMod = require('./06_module.js');
const dir = process.argv[2];
const fileToRead = process.argv[3];

myMod(dir, fileToRead, (err,list) => {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file);
  });
});
