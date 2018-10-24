var app = (function() {
  "use strict";
  const arr = [];
  const starter = function() {
    document.getElementById('inputStarter').oninput = inputValue;
    document.getElementById('btnStarter').onclick = getBtn;
    document.getElementById('btnClear').onclick = btnClear;
  };
  const inputValue = function(evt) {
    // console.log(evt);
    // console.log(evt.data);
    // console.log(evt.target.value);
    return arr.push(evt.data);
    // return arr.push(evt.target.value);
    // console.log(arr);
  }
  const getBtn = function(evt) {
    let input = document.getElementById('inputStarter');
    document.getElementById('result').innerHTML += "<li>" + arr.join('') + "</li>";
    input.value = input.defaultValue;
  }
  const btnClear = function(evt) {
    document.getElementById('result').innerHTML = "";
  }

  window.onload = function init() {
    starter();
  };
}())
