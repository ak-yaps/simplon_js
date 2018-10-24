/*jshint esversion:6*/

// nodeschool my first io
const fs = require("fs");
const file = process.argv[2];
const fileToRead = fs.readFileSync(file);
const result = fileToRead.toString().split('\n').length -1;
console.log(result);
