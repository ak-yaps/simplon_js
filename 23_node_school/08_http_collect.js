/*jshint esversion:6*/
const http = require('http');
const bl = require('bl');
const url = process.argv[2];

http.get(url, (res)=> {
  res.setEncoding('utf-8');
  res.pipe(bl((err,data)=>
  {
    if (err) throw err;
    data = data.toString();
    console.log(data.length);
    console.log(data);
  })
);
});
