( //TD 1
  function tdBoucleWhile() {
    var tabLi = [];

    function parcourirListeWhile() {
      var i = 0;
      while (i < tabLi.children.length) {
        console.log(tabLi.children[i].textContent);
        if (tabLi.children[i].textContent === 'pause repas') {
          alert('MIAM!!');
        }
        i++;
      }
      console.log('fin de boucle');
    };

    function testQuerySelector() {
      select = document.querySelector('.enonce');
      selectP = document.querySelectorAll('p');
      selectH1 = document.querySelector('h1').textContent;
      var j = 0;
      while (j < selectP.length) {
        selectP[j];
        j++;
      }
      console.log(select);
      console.log(selectP);
      console.log("le titre principal de la page est : " + selectH1 + '.');
    };

    //TD 2

    function parcourirListeFor() {
      selectAllLearn = document.querySelectorAll('.learn');
      for (var k = 0; k < selectAllLearn.length; k++) {
        console.log(selectAllLearn[k]);
        if (selectAllLearn[k].classList.contains('now')) {
          console.log('La longueur du contenu de cette balise est de ' + selectAllLearn[k].textContent.length + '.');
        }
      }
    };

    window.onload = function() {
      console.log('document chargé');
      tabLi = document.getElementById('todo_while');
      parcourirListeWhile();
      console.log('*****************************');
      testQuerySelector();
      console.log('*****************************');
      parcourirListeFor()
    }
  }());
