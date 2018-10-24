/*jshint esversion:6*/

// nodeschool baby steps
console.log(process.argv);
var sum = 0;

for (var i = 2; i < process.argv.length; i++) {
  sum+= Number(process.argv[i]);
}
console.log(sum);
