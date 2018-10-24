/*jshint esversion: 6*/
window.onload = function ajaxCall1() {
  function doAjax() {
    "use strict";
    // console.log("good to go!");
    const btn = document.getElementById('btn');

    const xhr = new XMLHttpRequest();
    // xhr.open("GET", "index.html");
    xhr.open("GET", "api.php");
    xhr.onload = function getData(evt) {
      // console.log(this.response === evt.target.response); //true
      const res = JSON.parse(this.response);
      document.getElementById('test').innerHTML = res.fr + ' | ' + res.en + ' | ' + res.kr;
    };
    xhr.send();
  }
  btn.addEventListener('click', doAjax);
};
