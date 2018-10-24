//Écrire une fonction displayTextBox() prenant une string en paramètre et l'affichant dans une alert box.
//Exécuter la méthode au rechargement de la page et depuis la console du navigateur.

function displayTextBox() {
  //alert("Écrire une fonction displayTextBox() prenant une string en paramètre et l'affichant dans une alert box");
}

displayTextBox();

//Écrire une fonction prenant deux paramètres a et b et les affichant dans la console, à la suite sur une même ligne, séparés par un espace. Commencer avec les paramètres de son choix. Puis tenter avec les deux strings suivantes:
//• C'est une belle journée...
//• Pour s’exercer à JS!&

function afficherConsole(a, b) {
  console.log(a + " " + b);
}

afficherConsole('Hello', 'World!');

function displayConsole(c, d) {
  console.log(c + " " + d);
}

displayConsole("C'est une belle journée...", "Pour s’exercer à JS!&");

//Écrire une fonction prenant deux paramètres a et b et les multipliant. Si le résultat est de type number, le retourner et afficher le résultat dans la console. Sinon, une alerte indiquera une erreur.

function multiplication(a, b) {
  var res = a * b;
  if (!a && a !== 0 || !b && b !== 0) {
    res = 'Un (ou plusieurs) opérande(s) manquant(s)';
  } else if (isNaN(res)) {
    res = 'This is not a number';
  }
  return res;
}
console.log(multiplication(13, 90));
console.log(multiplication('me', 90));
console.log(multiplication(23, true));

// Exercice 4

(function() {
  var user1 = {
    name: "Kaede",
    age: 16
  };
  var user2 = {
    name: "Hanamichi",
    age: 15
  };

  function getName(user) {
    return (user.name);
  }


  function getAge(user) {
    return (user.age);
  }

  getAge(user2);

  function displayUserInfo(user) {
    var getId = document.getElementById('res_user1');
    var getButton = document.getElementById('show_res');
    var rmvButton = document.getElementById('rmv_res');
    getButton.addEventListener("click", function() {
      getId.innerHTML = "<p>" + 'Cet utilisateur se nommant ' + "<strong>" + getName(user) + "</strong>" + ' est âgé(e) de ' + "<strong>" + getAge(user) + "</strong>" + ' ans.' + "</p>";
    }, false);
    rmvButton.addEventListener("click", function() {
      getId.innerHTML = '';
    }, false);
  }

  displayUserInfo(user1);
}());

// Exercice 5
(function exercice5() {
  var tabId = document.getElementById('exo5').children;
  console.log(tabId);
  for (var i = 0; i < tabId.length; i++) {
    document.getElementById('getEasyDOM').innerHTML += 'l\'id de la div ' + [i + 1] + ' est ' + tabId[i].id + '<br>';
  };
}());

// Exercice 6
(function colorDiv() {
  var getEasyDOM = document.getElementById('exo5');
  console.log(getEasyDOM);
  for (var i=0; i < getEasyDOM.children.length; i++) {
    getEasyDOM.children[i].addEventListener("click", function () {
        this.style.backgroundColor = 'GoldenRod';
    })
  }
}());

// (function colorDiv2(element) {
//   if(element.style.color === "" || element.style.color === "white") {
//     element.style.color = "plum";
//   } else {
//     element.style.color = "white";
//   }
//
// }());
