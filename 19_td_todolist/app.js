/*jshint esversion: 6*/
/*global document, window, console*/

var  todo1 = (function todo1() {
  "use strict";
  var getUl, cpt=0;

  const verifierSaisie = function(str) {
    return str.length >= 4;
  };

  const insererSaisie = function(str) {
      const createLi = document.createElement('li');
      const createInput = document.createElement('input');
      createInput.type = "checkbox";
      console.log(createLi);
      createLi.classList.add('item');
      createLi.id = "item_" + cpt;
      createLi.innerHTML = str;
      createLi.appendChild(createInput);
      getUl.appendChild(createLi);
  };

  const supprimerLi = function() {

  };

const init = function init() {
  const btn = document.getElementById("valid_todo");
  getUl = document.getElementById('todo_list');

  btn.onclick = function action() {
    const saisie = document.getElementById("saisie_todo").value;
    const res = verifierSaisie(saisie);
  console.log("la saisie est-elle valide?");
  console.log(res);

  if (res) {
    insererSaisie(saisie);
    document.getElementById("saisie_todo").value = document.getElementById("saisie_todo").defaultValue;
  } else {
    alert("Vérifier votre saisie !");
  }
};

};

  window.addEventListener("DOMContentLoaded", init);
}());
