/*jshint esversion:6*/
// nodeschool juggling async

const http = require('http');
const bl = require('bl');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
const results = new Array(urls.length);
// console.log(results);

const getUrl = function getUrl(url, index) {
    var res = "";
    http.get(url, res => {
        res.setEncoding("utf8");

        res.on("data", d => {
            res += d;
        });

        res.on("end", d => {
            // on veut attendre que toutes les urls soient lues pour les afficher toutes dans l'ordre
            // console.log('url: ' + url);
            // console.log('index: ' + index);
            // console.log(res);
            console.log(urls[index]);
            console.log(urls.indexOf(urls[index]));
            console.log(index);
            
        });
    });
};

urls.forEach((url, i) => {
    getUrl(url, i);
});