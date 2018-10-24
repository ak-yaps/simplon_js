console.log('bon appétit');
console.log({
  name: 'Jack',
  age: '56'
});
console.log();
console.log(isNaN(13));

var myVariable = "my first variable";

function bonjour() {
  console.log("Yo " + myVariable + "!");
}

bonjour();

function getType(type) {
  console.log(typeof type);
}

getType(3);
getType(NaN);
getType("JS is so cool");

//19 Octobre 2017
var add = function(n1, n2) {
  return 0 + n1 + n2;
}

console.log(add(100, 456));

var divide = function(a, b, c) {
  return a / b / c;
}
console.log(add(90, 45, 2));

var result = function iseven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(result(10));
console.log(result(11));

//correction
function estPair(n2) {
  if(n2%2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(estPair(20));
console.log(estPair(21));

function estPair2(a) {
  return a % 2 === 0;
}

console.log(estPair2(54));
console.log(estPair2(23));
