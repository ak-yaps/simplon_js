/*jshint esversion:6*/
//nodeschool filter listing
const fs = require("fs");
const path =  require('path');
const dossier = process.argv[2];

fs.readdir(dossier, function (err, list) {
  if(err) throw err;
      list.forEach(function(el){
      if (path.extname(el) ===".md")
            console.log(el);
    });
 });
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
