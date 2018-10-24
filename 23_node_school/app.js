/*jshint esversion:6*/
//nodeschool hello world
// console.log("HELLO WORLD");

//nodeschool baby steps
// console.log(process.argv);
// var sum = 0;
//
// for (var i = 2; i < process.argv.length; i++) {
//   sum+= Number(process.argv[i]);
// }
// console.log(sum);

// nodeschool my first io
// const fs = require("fs");
// const file = process.argv[2];
// const fileToRead = fs.readFileSync(file);
// const result = fileToRead.toString().split('\n').length -1;
// console.log(result);

//nodeschool my first async io
// const fs = require("fs");
// const file = process.argv[2];
// fs.readFile(file, 'utf8', function (err, data) {
//   var fileToRead = data.split('\n').length -1;
//   console.log(fileToRead);
//  });

//nodeschool filter listing
// const fs = require("fs");
// const path =  require('path');
// const dossier = process.argv[2];
//
// fs.readdir(dossier, function (err, list) {
//   if(err) throw err;
//       list.forEach(function(el){
//       if (path.extname(el) ===".md")
//             console.log(el);
//     });
//  });
//
//  correction
//  const fs = require('fs');
//  const path = "./files";
//  const ext = "html";
//  fs.readdir(path, (err, files) => {
//  if(err) throw err;
//  const filtered = files.filter(f=>f.endsWith("." + ext));
//  filtered.forEach(f=>console.log(f));
//  });

//nodeschool make it modular
const fileRequire = require('./nodeschool6.js');
