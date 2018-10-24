var app = (function() {

  var divFor, divWhile, divForEach, arr = ["I want to go on", "holidays", "now"];

  var divLoop = function() {
    divFor = document.getElementById('loopFor');
    divWhile = document.getElementById('loopWhile');
    divForEach = document.getElementById('loopforEach');
  };

  var loopFor = function() {
    for (var i = 0; i < arr.length; i++) {
      console.log('boucle for iteration n°'+ (i+1) + ' ' + arr[i]);
      divFor.innerHTML += arr[i] + ' ';
    }
  };

  var loopWhile = function() {
    var k = 0;
    while (arr.length > k) {
      console.log('boucle while iteration n°'+ (k+1) + ' ' + arr[k]);
      divWhile.innerHTML += arr[k] + ' ';
      k++;
    }
  };

  window.onload = function() {
    divLoop();
    console.log('************************');
    loopFor();
    console.log('************************');
    loopWhile();
    console.log('************************');

    var loopForEach = arr.forEach(function(el, i) {
      console.log('boucle forEach iteration n°' + (i + 1) + ':' + el);
      divForEach.innerHTML += el + ' ';
    })
  };
}());
