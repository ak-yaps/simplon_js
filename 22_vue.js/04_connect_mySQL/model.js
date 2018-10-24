/*jshint esversion: 6*/
/*global document, window, console*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'villes_fr'
});

connection.connect();
const getVillesFR = (clbk) => {
  connection.query('SELECT * FROM departement', function (error, results, fields) {
    if (error) throw error;
    clbk(results);
  });
};

module.exports = {
  getVillesFR: getVillesFR,
};
