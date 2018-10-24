/*jshint esversion: 6*/
var liste1 = (function liste1() {
  "use strict";
  var ul, todoInput, ctp;

  const verifierSaisie = function(str) {
    return str.length >= 4;
  };

  const deplacerTodo = function deplacerTodo() {
    const liCible = this.parentElement.parentElement;

    let next;

    if(this.classList.contains("fa-caret-up")) {
      next = liCible.previousElementSibling;

      if(!next) return;
    } else {
      let tmp = liCible.nextElementSibling;

      if (tmp) {
        next = tmp.nextElementSibling;
      }
    }
    console.log(next);
    ul.insertBefore(liCible, next);
  };

  const creerWidgetDeplacement = function creerWidgetDeplacement() {
    const div = document.createElement("div");
    const iconUp = document.createElement("i");
    const iconDown = document.createElement("i");
    div.classList.add("deplacement");
    iconUp.className = "fa fa-caret-up";
    iconDown.className = "fa fa-caret-down";
    iconUp.onclick = deplacerTodo;
    iconDown.onclick = deplacerTodo;
    div.appendChild(iconUp);
    div.appendChild(iconDown);
    return div;
  };

  const insererSaisie = function(str) {
    ctp++;
    const li = document.createElement("li");
    const input = document.createElement("input");
    const deplacement = creerWidgetDeplacement();

    input.type = "checkbox";
    li.classList.add('item');
    li.id = "item_" + ctp;
    li.textContent = str;
    li.appendChild(input);
    li.appendChild(deplacement);
    return ul.appendChild(li);
  };

  const getCheckedTodos = function getCheckedTodos() {
    return document.querySelectorAll("#todo_list input:checked");
  };

  const supprimer = function supprimer(todos) {
    todos.forEach(function detacher(todo) {
      ul.removeChild(todo.parentElement);
    });
  };

  const getNombresTodos = function getNombresTodos(todos) {
    return document.querySelectorAll('#todo_list .item').length;
  };

  const init = function init() {
    ul = document.getElementById("todo_list");
    todoInput = document.getElementById("saisie_todo");
    const btnInser = document.getElementById("valid_todo");
    const btnSuppr = document.getElementById("suppr_todo");

    btnInser.onclick = function lancerInsertion() {
      if (verifierSaisie(todoInput.value)) {
        insererSaisie(todoInput.value);
        todoInput.value = todoInput.defaultValue;
      } else {
        alert("vérifier votre saisie");
      }

      btnSuppr.onclick = function lancerSuppression() {
        const tmp = getCheckedTodos();

        if (tmp.length) {
          supprimer(tmp);
          if (!getNombresTodos()) {
            alert('DONE!');
          }
        }
      };

      return {
        init: init
      };
    };
  };
  window.addEventListener("DOMContentLoaded", init);
}());

(function myWidgets() {
  "use strict";
  const listen = window.addEventListener;

  listen("DOMContentLoaded", function exec() {
    liste1.init();
  });
}());
