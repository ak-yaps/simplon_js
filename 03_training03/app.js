//Déclarer des variables avec chaque type de valeur;
var str = 'yaps';
var nb = 44;
var bool = nb > 40;
var later = null;
var unset;
var obj = {
  name: 'Yunho',
  job: 'idol',
  birthplace: 'Gwanju',
  title: 'Champagne',
};
var arr = [8, {
  age: 31
}, 'tvxq', 13];

console.log(obj);
console.log(arr.length);
console.log(arr[1]); //afficher contenu de la seconde case du tableau;
console.log(obj.job);
console.log(str + " est un type de données");
console.log(obj.name + " is an " + obj.job + " who was born in " + obj.birthplace + ". His hit song was " + obj.title + ".");
//literal objet
console.log(`${obj.name} is an ${obj.job} who was born in ${obj.birthplace}. His hit song was ${obj.title}.`);


// ajouter une valeur au tableau
function addArr(p) {
  return arr.push(p);
}

console.log(addArr(5));
console.log(arr);

//EXO

function createUser(nm, l, a) {
  return {
    name: nm,
    lastname: l,
    age: a
  }
}

var u1 = createUser("amangoua", "guillaume", 37);
var u2 = createUser("jeremy", "ahbari", 42);
var u3 = createUser("soufiane", "rouass", 27);

console.log(u1, u2, u3);
console.log('Le formateur JS s\'appelle ' + u1.lastname + ' ' + u1.name + '. Il a ' + u1.age + ' ans');

//SCOPE
function understandScope() {
  var a = "value";
  console.log(a);
  console.log(arr);

  function scopeIntern() {
    var b = "another value";
    console.log(a);
    console.log(b);
    console.log(arr);
  }
  scopeIntern();
}

understandScope();


/////////////////////////////////////////////////////////////////

(function session1JS() {
  function multiplication(n1, n2) {
    return n1 * n2
  }
  console.log(multiplication(3, 5));

  var div = document.getElementById('testJS');
  div.textContent = multiplication(45, 5);

}());
