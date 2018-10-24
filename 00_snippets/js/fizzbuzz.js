/*jshint esversion:6 */
let answer = document.getElementById('fizzbuzz').innerHTML;
let nb = 1;

while (nb <= 100) {
  if (nb%15 === 0) {
    console.log('FizzBuzz ' + nb);è
    
  } else if (nb%5 === 0) {
    console.log('Buzz ' + nb);
    
  } else if (nb%3 === 0) {
    console.log('Fizz ' + nb);
  } else console.log(nb);
  nb++;
}