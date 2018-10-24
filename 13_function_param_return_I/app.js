/** @namespace*/
var fpr = (function() {
  "use strict";

  // 1/ Écrire une fonction one. Dans le corps de one, une alert() affiche le message de votre choix.
  function one() {
    alert("시적하자!!!");
  };

  // 2 / Écrire une fonction hello.
  // Dans le corps de hello, afficher la chaîne «hello» dans la console.
  // Ne pas utiliser return pour cette fonction
  function hello() {
    return;
  };

  // 3 / Écrire une fonction dummyReturn, prenant un paramètre p.
  // Retourner p, non modifié.
  // Tester avec l’instruction console.log(dummyReturn())
  // Tester avec une affectation, var x = dummyReturn(), log(x)
  function dummyReturn(p) {
    return p;
  }
  var x = dummyReturn();

  // 4 / Écrire une fonction foo.
  // foo ne prend pas de paramètre.
  // Retourner la chaîne «bar» quand elle est exécutée.
  // Tester avec l’instruction console.log(foo())
  // Tester avec une affectation, var x = foo()

  function foo() {
    return "bar";
  };

  // 5 / Écrire une fonction helloWho, prenant un paramètre nom.
  // Retourner la chaîne «hello» concaténée avec nom.
  // Tester avec l’instruction console.log(helloWho())
  // Tester avec une affectation, var x = helloWho()

  function helloWho(nom) {
    return "hello " + nom;
  };

  // 6 / Écrire une fonction isNumber, prenant un paramètre n.
  // Retourner true si n est un nombre, false sinon.
  // Tester avec l’instruction console.log(isNumber());
  // Tester avec une affectation, var x = isNumber()

  function isNumber(n) {
    if (isNaN(n) === false) {
      return true;
    } else {
      return false;
    }
  };

  // 7 / Écrire une fonction contraire, prenant un paramètre un booléen b.
  // Si b n’est pas une booléen, retourner une nouvelle Erreur.
  // Sinon retourner le booléen contraire de b.
  // Tester avec l’instruction console.log(contraire());
  // Tester avec une affectation, var x = contraire()

  function contraire(b) {
    if (b === true) {
      return false;
    } else if (b === false) {
      return true;
    } else if (b !== true || b !== false) {
      return "nouvelle Erreur";
    }
  };

  // 8 / Écrire une fonction isEmpty, prenant un paramètre p.
  // isEmpty retourne true si:
  // Si p est un tableau et que sa longueur est nulle.
  // Si p est une string de taille 0.
  // Si p est un objet sans aucune propriété.
  // Sinon isEmpty retourne false.
  // Tester avec l’instruction console.log(isEmpty());
  // Affecter avec NOT isEmpty, var x = !isEmpty()

  function isEmpty(p) {
    if ((Array.isArray(p) && p.length === 0) || (Object.keys(p).length === 0 && p.constructor === Object)) {
      return true;
    } else {
      return false;
    }
  };

  // 9/
  /**
   * @author Ayaba KUMAKO <contact@ayaba-kumako.com>
   * @alias fpr.addCSSClass
   * @param {string} s classe CSS à récupérer
   * @param {string} css classe CSS à ajouter
   */

  function addCSSClass(s, css) {
    var qsa = document.querySelectorAll(s);
    console.log(qsa);
    qsa.forEach(function(el) {
      el.classList.add(css);
      console.log(el);
    })

  };

  /**
   * une fonction pipeau pour tester la documentation automatique
   * @author Ayaba KUMAKO <contact@ayaba-kumako.com>
   * @alias fpr.testDoc
   * @param {number} n un nombre à Tester
   * @return {boolean} un booléen valant false si n est supérieur à 10, true sinon.
   */
  function testDoc(n) {
    return n < 10;
  };

  window.onload = function() {
    testDoc();
    console.log('---------fonction DUMMYRETURN----------');
    console.log(dummyReturn());
    console.log(x);
    console.log('----------fonction FOO----------');
    foo();
    console.log(foo());
    var x = foo();
    console.log(x);
    console.log('----------fonction HELLOWHO----------');
    console.log(helloWho());
    var x = helloWho();
    console.log(x);
    console.log('----------fonction ISNUMBER----------');
    console.log(isNumber(9));
    console.log(isNumber('moi'));
    console.log(isNumber());
    console.log(isNumber('9'));
    var x = isNumber();
    console.log(x);
    console.log('----------fonction CONTRAIRE----------');
    console.log(contraire());
    console.log(contraire(true));
    console.log(contraire(false));
    console.log(contraire("yaps"));
    console.log(contraire(2));
    console.log('-----------fonction ISEMPTY----------');
    console.log(isEmpty(2));
    console.log(isEmpty({}));
    console.log(isEmpty(''));
    addCSSClass('article.reponse', 'addCss');
    console.log('----exo 10----');
    console.log(addCSSClass(isEmpty('h2.test'), 'red'));
  };

}());
