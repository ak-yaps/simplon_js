console.log("Hello Typescript");
var firstName = 'yaps';
var lastName;
var age = 23;
var aimeCoder = true;
var what;
firstName = 'Ayaba';
age = 32;
console.log(firstName);
console.log(age);
console.log(aimeCoder);
console.log(what);
what = 123;
console.log(what);
what = 'what';
var myHobbies = [undefined, null, "chose", 42];
var myRealHobbies = ["예능", "음악", "chose", "42"];
var someNumbers = [1233, 44, 1004, 1209, 7585];
console.log(myHobbies);
console.log(myRealHobbies);
//myRealHobbies.push(44);
myRealHobbies.push("DIY");
console.log(myRealHobbies);
//TYPE TUPLES
var address = ["rue du pot", 100];
// address = [123, "rue de la variable"];
address = ["rue de la variable", 66];
console.log(address);
// TYPE ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Black"] = 1004] = "Black";
    Color[Color["Blue"] = 1005] = "Blue";
})(Color || (Color = {}));
var myFavColor = Color.Black;
var mySecondFavColor = Color.Blue;
console.log("Ma couleur préférée");
console.log(myFavColor);
console.log("Ma seconde couleur préférée");
console.log(mySecondFavColor);
function pipo(a) {
    return a + "c'est du pipeau";
}
console.log(pipo("JS "));
// ranger le tableau dans l'ordre croissant;
var someNbs = [1233, 34, 55, 123, 5000, -5];
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
var userData = {
    name: "Yunho",
    isAdmin: true
};
userData = {
    isAdmin: true,
    name: "Yunho"
};
var realUserData = {
    isAdmin: true,
    name: "Yunho"
};
realUserData = {
    name: true,
    isAdmin: "toto"
};
var complex;
complex = {
    data: ["a", "b"],
    checkAdmin: function (m) {
        return b === true;
    }
};
var p1 = {
    ref: 123456789,
    price: 120,
    name: "un produit",
    desc: "produit de la gamme XX"
};
var p2 = {
    ref: 987654321,
    price: 20,
    name: "un autre produit",
    desc: "produit de la gamme YY"
};
console.log(p1);
console.log(p2);
// TYPE UNION
var ageUser = 23;
ageUser = "23";
ageUser = 23;
//ageUser = true;
