/*jshint esversion: 6*/
/*global document, window, console*/

window.addEventListener("DOMContentLoaded", function appVue() {
  const app = new Vue({
    el:"#vue_mysql",
    data: {
      villesFrance: null
    },
    methods: {
      doAjax: function(url, method, clbk) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function() {
          clbk(this.response);
        };
        xhr.send();
      },
      getDBValues: function(url) {
        const that = this;
        this.doAjax(url, "get", function getData(res) {
          that.villesFrance = JSON.parse(res);
        });
      }
    }
  });
});
