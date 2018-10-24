/*jshint esversion: 6*/
/*global document, window, console*/

var vueJs_tp2 = (function vueJs_tp2() {
  "use strict";
  const init = function init() {
    var tp2_vue = new Vue({
      el: '#tp2_vue',
      methods: {
        alerte: function(event) {
          alert("l'alerte fonctionne");
        },
        test: function(event) {
          console.log('test');
          console.log(event.key);
        }
      }
    });
    var tp2_vue_2 = new Vue({
      el:'#tp2_vue_2',
      data: {
        q2: "",
        q3:""
      },
      // methods: {
      //   keydown: function() {
      //     console.log(this.test);
      //     return this.test;
      //   }
      // }
    });
  };

  window.addEventListener("DOMContentLoaded", init);
}());
