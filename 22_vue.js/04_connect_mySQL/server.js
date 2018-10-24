/*jshint esversion: 6*/
/*global document, window, console*/

const express = require('express');
const app = express();
const model = require("./model.js");

console.log("## hello world! ##");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  res.send('hello from express');
});

app.get('/test', function(req, res) {
  res.send(JSON.stringify({
    message: 'hello test'
  }));
});
app.get('/get-villes-france', function(req, res) {
  model.getVillesFR(function callback(data) {
    res.send(JSON.stringify(data));
  });
});

app.listen(8072);
