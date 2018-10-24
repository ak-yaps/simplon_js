/*jshint esversion: 6*/
var app = (function() {
  "use strict";
  const observer = function() {
    document.getElementById('my_btn').onclick = action1;
    document.getElementById('my_input').oninput = action2;
    window.onscroll = action3;
    window.onmousemove =  action4
  };
  const action1 = function(evt) {
    console.log(evt.type);
    // console.log("click");
    console.log(this);
  };
  const action2 = function(evt) {
    const source = evt.target || evt.srcElement;
    console.log(evt.type);
    console.log(evt.data);
    console.log(evt);
    // console.log("input");
    console.log(this);
  };
  const action3 = function(evt) {
    const src = evt.target || evt.srcElement;
    console.log(evt.type);
    console.log(evt);
    console.log(this);
    console.log(this === src);
  };
  const action4 = function(evt) {
    const src = evt.target || evt.srcElement;
    console.log(evt);
    console.log(evt.screenX);
    console.log(evt.screenY);
  };
  window.onload = function init() {
    observer();
  };
}());
