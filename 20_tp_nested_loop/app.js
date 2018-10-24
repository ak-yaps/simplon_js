/*jshint esversion: 6*/
/*global document, window, console*/

const tdNestedLoopsExo1 = (function tdNestedLoopsExo1() {
  "use strict";

  var produits = [{
      nom: "baskets enfant",
      taillesDispo: [33, 34, 35, 36, 37, 38]
    },
    {
      nom: "baskets femme",
      taillesDispo: [36, 37, 38, 39, 40]
    },
    {
      nom: "baskets homme",
      taillesDispo: [39, 40, 41, 42, 43, 44, 45]
    },
    {
      nom: "baskets grandes tailles",
      taillesDispo: [46, 47, 48, 49, 50]
    }
  ];

  const init = function init() {

    const getDivExo1 = document.getElementById('exo1');

    for (let i = 0; i < produits.length; i++) {
      console.log(produits[i].nom);
      var text = document.createElement('p');
      const createUl = document.createElement('ul');
      getDivExo1.appendChild(createUl);
      const creatLi = document.createElement('li');
      creatLi.textContent += produits[i].nom;
      createUl.appendChild(creatLi);
      createUl.appendChild(text);
      text.textContent = 'Tailles disponibles';
      for (let j = 0; j < produits[i].taillesDispo.length; j++) {
        console.log(produits[i].taillesDispo[j]);
        const newLi = document.createElement('li');
        newLi.textContent += produits[i].taillesDispo[j];
        createUl.appendChild(newLi);
      }
    }
  };

  window.addEventListener("DOMContentLoaded", init);
}());


const tdNestedLoopsExo2 = (function tdNestedLoopsExo2() {
  'use strict';

  const init = (function init() {
    // const tablExo2 = do
    const divExo2 = document.getElementById('exo2');
    console.log(divExo2);

    const draw = function draw(row, col) {
      var newRow = divExo2.insertRow(0);
      console.log(newRow);

      for (var i = 1; i <= row; i++) {
        console.log('row' + (i+1));
        var newCell = newRow.insertCell(0);
        newCell.innerHTML += i;

        for (var j = 0; j <= col; j++) {
          console.log('column' + (j));
        }
      }
    };

    draw(2, 5);

  });

  window.addEventListener("DOMContentLoaded", init);

}());
