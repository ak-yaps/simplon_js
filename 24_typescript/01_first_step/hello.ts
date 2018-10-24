console.log("Hello Typescript");

let firstName: string = 'yaps';
let lastName: string;
let age: number = 23;
let aimeCoder: boolean = true;
let what: any;

firstName = 'Ayaba';
age = 32;
console.log(firstName);
console.log(age);
console.log(aimeCoder);
console.log(what);
what = 123;
console.log(what);
what = 'what';

let myHobbies = [undefined, null, "chose", 42];
let myRealHobbies:string[] = ["예능", "음악", "chose", "42"];
let someNumbers: number[] = [1233, 44, 1004, 1209, 7585]
console.log(myHobbies);
console.log(myRealHobbies);
//myRealHobbies.push(44);
myRealHobbies.push("DIY");
console.log(myRealHobbies);

//TYPE TUPLES
let address: [string, number] = ["rue du pot", 100];
// address = [123, "rue de la variable"];
address = ["rue de la variable", 66];
console.log(address);

// TYPE ENUM
enum Color {
  Red, 
  Yellow, 
  Green,
  Black = 1004,
  Blue
}

const myFavColor: Color = Color.Black;
const mySecondFavColor: Color = Color.Blue;
console.log("Ma couleur préférée");
console.log(myFavColor);
console.log("Ma seconde couleur préférée");
console.log(mySecondFavColor);


function pipo(a: string): string {
  return a  + "c'est du pipeau";
}
console.log(pipo("JS "));

// ranger le tableau dans l'ordre croissant;
let someNbs: number[] = [1233, 34, 55, 123, 5000, -5];
console.log("mon tableau de nombres");
console.log(someNbs);

function sortNbs(a, b) {
  return a - b;
}

someNbs = someNbs.sort(sortNbs);

console.log("mon tableau de nombres classé");
console.log(someNbs.join(" , "));

// CORRECTION

// function sortNumbers(arr:number [])


// OBJECT

let userData = {
  name: "Yunho",
  isAdmin: true
}

userData = {
  isAdmin: true,
  name: "Yunho"
}

let realUserData: {isAdmin: boolean, name: string} = {
  isAdmin: true,
  name: "Yunho"
}

realUserData = {
  name: true,
  isAdmin: "toto"
}

let complex: {data: string[], checkAdmin: (mail: string) => boolean};

// complex = {
//   data: ["a", "b"],
//   checkAdmin: (m) => {
//     return b === true;
//   }
// }

type Product = {ref: number, price: number, name: string, desc: string};

const p1: Product = {
  ref: 123456789,
  price: 120,
  name: "un produit",
  desc: "produit de la gamme XX"
};

const p2: Product = {
  ref: 987654321,
  price: 20,
  name: "un autre produit",
  desc: "produit de la gamme YY"
};

console.log(p1);
console.log(p2);

// TYPE UNION
let ageUser: number | string = 23;
ageUser = "23";
ageUser = 23;
//ageUser = true;


