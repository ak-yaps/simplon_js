/*jshint esversion: 6*/
window.onload = function ajaxCall1() {
  "use strict";
  const btn_opendata = document.getElementById('btn_opendata');
  const div = document.getElementById('test_opendata');

  function getOpenData() {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "les-1000-titres-les-plus-reserves-dans-les-bibliotheques-de-pret.json");
    xhr.onload = function getData(evt) {
      //console.log(this.response);
      const result = JSON.parse(this.response);
      const ul = document.createElement("ul");
      div.appendChild(ul);
      result.forEach(function(el) {
        const li = document.createElement("li");
        li.innerHTML = el.fields.titre;
        ul.appendChild(li);
        // console.log(el.datasetid);
        // console.log(el.recordid);
        // console.log(el.record_timestamp);
        // console.log(el.fields);
        // console.log(el.fields.prets);
        // console.log(el.fields.rang);
        // console.log(el.fields.auteur);
        // console.log(el.fields.type_de_document);
        // console.log(el.fields.titre);
      });
    };
    xhr.send();
  }
  btn_opendata.addEventListener('click', getOpenData);
};
