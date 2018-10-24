/* jshint esversion : 6 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userModel = require("./models/users.js");
// uploader avatar
const uploader = require("./services/uploader");
const uploaderAvatar = uploader.single('avatar');

// config des type de données acceptée en param ajax
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// config simple du C.O.R.S
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// API User Basic

app.get('/', (req, res) => {
  console.log("@api/basic");
  res.send('Hello World');
});

app.get('/user', (req, res) => {
  console.log("get-user@api");
  userModel.get((data) => {
    console.log("data après get tous les users");
    console.log(data);
    res.send(data);
  });
});

app.get('/user/:id', (req, res) => {
  console.log("get-user:id@api => " + req.params.id);
  userModel.get((data) => {
    console.log('data after get user by id');
    console.log(data);
    res.send(data);
  }, req.params.id);
});

app.post('/user', (req, res) => {
  console.log('post-user@api');
  userModel.create((data) => {
    console.log('data after create user');
    console.log(data);
    res.send(data);
  }, req.body); // ici le second parametre
});

app.delete('/user/:id', (req, res) => {
  console.log('delete-user:id@api => '+ req.params.id);

  userModel.remove((data) => {
    console.log('data after delete user');
    console.log(data);
    res.send(data);
  }, req.params.id);
});

app.post('/avatar', uploaderAvatar, (req, res) => {
  if(!req.file) {
    console.log("no file received");
    return res.send({error: true, message: "no file received"});
  } else {
    console.log('file received');
    uploaderAvatar(req, res, (err) => {
      if (err) {
        return res.send({error: true, message: "error during upload"});
      }
      res.send({error: false, message: "file received"});
    });
  }
});

app.listen(3000);
