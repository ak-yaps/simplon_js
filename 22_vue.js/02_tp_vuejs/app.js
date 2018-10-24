/*jshint esversion: 6*/
/*global document, window, console*/

var vueJs_tp1 = (function vueJs_tp1() {
  "use strict";
  const init = function init() {
    var exo_vue_1 = new Vue({
      el: '#exo_vue_1',
      data: {
        title: "Réponse exercice 1 VueJS",
        me: {
          name: "Ayaba",
          age: 32
        },
        displayRandom: "",
        src: "image.jpg",
        inputVal: "yaps",
      },
      methods: {
        random: function() {
          this.displayRandom = Math.random();
        }
      }
    });

    var exo_vue_2 = new Vue({
      el: "#exo_vue_2",
      data: {
        usa: [{
            nom: "Alabama"
          },
          {
            nom: "Alaska"
          },
          {
            nom: "Arizona"
          },
          {
            nom: "Arkansas"
          },
          {
            nom: "Californie"
          },
          {
            nom: "Caroline du Nord"
          },
          {
            nom: "Caroline du Sud"
          },
          {
            nom: "Colorado"
          },
          {
            nom: "Connecticut"
          },
          {
            nom: "Dakota du Nord"
          },
          {
            nom: "Dakota du Sud"
          },
          {
            nom: "Delaware"
          },
          {
            nom: "Floride"
          },
          {
            nom: "Georgie"
          },
          {
            nom: "Hawaii"
          },
          {
            nom: "Idaho"
          },
          {
            nom: "Illinois"
          },
          {
            nom: "Indiana"
          },
          {
            nom: "Iowa"
          },
          {
            nom: "Kansas"
          },
          {
            nom: "Kentucky"
          },
          {
            nom: "Louisiane"
          },
          {
            nom: "Maine"
          },
          {
            nom: "Maryland"
          },
          {
            nom: "Massachusetts"
          },
          {
            nom: "Michigan"
          },
          {
            nom: "Minnesota"
          },
          {
            nom: "Mississippi"
          },
          {
            nom: "Missouri"
          },
          {
            nom: "Montana"
          },
          {
            nom: "Nebraska"
          },
          {
            nom: "Nevada"
          },
          {
            nom: "New Hampshire"
          },
          {
            nom: "New Jersey"
          },
          {
            nom: "New York"
          },
          {
            nom: "Nouveau"
          },
          {
            nom: "Ohio"
          },
          {
            nom: "Oklahoma"
          },
          {
            nom: "Oregon"
          },
          {
            nom: "Pennsylvanie"
          },
          {
            nom: "Rhode Island"
          },
          {
            nom: "Tennessee"
          },
          {
            nom: "Texas"
          },
          {
            nom: "Utah"
          },
          {
            nom: "Vermont"
          },
          {
            nom: "Virginie"
          },
          {
            nom: "Virginie-Occidentale"
          },
          {
            nom: "Washington"
          },
          {
            nom: "Wisconsin"
          },
          {
            nom: "Wyoming"
          }
        ],
        filtre: "",
      },
      // methods: {
      //   getVal: function() {
      //     // console.log('ok');
      //     // console.log(this.usa);
      //     // console.log(this.usa[0].nom);
      //     this.usa.forEach(function(el) {
      //       console.log(el.nom);
      //     });
      //   },
      // },
      computed: {
        filtreEtat: function() {
          var self = this;
          return this.usa.filter(function(etat) {
            return etat.nom.toLowerCase().indexOf(self.filtre.toLowerCase()) >= 0;
          });
        },
      }

    });


  };

  window.addEventListener("DOMContentLoaded", init);
}());
