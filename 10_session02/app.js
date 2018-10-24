// CREER UN CONSTRUCTEUR
(function() {

  var vert, rouge, btnInvColor, btnPlayer, btnClear;

  var Stats = function Stats(player) {
    this.name = player.name;
    this.team = player.team;
    this.number = player.number;
    this.position = player.position;
    this.height = player.height;
    this.active = player.active;
  }

  var p1 = new Stats({
    name: "Stephen Curry",
    team: "Warrior Golden State",
    number: 30,
    position: "PG",
    height: "190 cm",
    active: true,
  })

  var p2 = new Stats({
    name: "Michael Jordan",
    team: "Chicago Bulls",
    number: 23,
    position: "SG",
    height: "198 cm",
    active: false,
  })

  var p3 = new Stats({
    name: "Dwight Howard",
    team: "Charlotte Hornets",
    number: 12,
    position: "Center",
    height: "211 cm",
    active: true,
  })

  var p4 = new Stats({
    name: "Kobe Bryant",
    team: "LA Lakers",
    number: 24,
    position: "SG",
    height: "198 cm",
    active: false,
  })

  var arrayPlayer = [p1, p2, p3, p4];

  console.log(p1, p2, p3, p4);
  console.log(arrayPlayer);

  Stats.prototype.getStatsHTML = function getStatsHTML() {
    var that = this;
    console.log("this");
    console.log(this);
    btnPlayer.addEventListener("click", function(evt) {
      console.log(that);
      return divShow.innerHTML += that.name + "<br>" + that.team + "<br>" + that.number + "<br>" + that.position + "<br>" + that.height + '<hr>';
    })
  }

  // EXERCICE 1
  function invertColor(div, otherDiv) {
    btnInvColor.addEventListener("click", function() {
      if (div.id !== div.style.backgroundColor) {
        return div.style.backgroundColor = div.id;
      } else if (div.id == div.style.backgroundColor) {
        return div.style.backgroundColor = otherDiv.id;
      }
    })
  }

  // EXERCICE 2
  function swapLetters(str) {
    btnSwap.addEventListener("click", function() {
      swap.innerHTML += str.split("").reverse().join("") + "<br>";
    })
  }

  // EXERCICE 3
  function drawRow(row, col) {
    var i, resRow = "";
    for (i = 0; i < row; i++) {
      resRow += drawColumn(col) + '<br>';
    }
    return getPyramid.innerHTML += resRow;
  }

  function drawColumn(col) {
    var j, resCol = "| ";
    for (j = 0; j < col; j++) {
      resCol += [j] + " | ";
    }
    return resCol;
  }

  // EXERCICE 4
  function estUnPalindrome(str) {
    var re = /[^A-Za-z0–9]/g;
    var minuscule = str.toLowerCase().replace(re, '');
    var inverserStr = minuscule.split('').reverse().join('');
    console.log(inverserStr === minuscule);
  }

  // EXERCICE 5
  // Écrire un constructeur User() produisant des objets user
  var User = function User(user) {
    this.name = user.name,
      this.age = user.age,
      this.sayHello = function sayHello() {
        alert('Hello ' + user.name + '!');
      }
  }


  // Coder la fonction createUser(count)
  function createUser(n) {

  }

  window.onload = function() {
    vert = document.getElementById('green');
    rouge = document.getElementById('red');
    btnInvColor = document.getElementById('btnInvColor');
    btnSwap = document.getElementById('btnSwap');
    divSwap = document.getElementById('swap');
    getPyramid = document.getElementById('pyramid');
    divShow = document.getElementById("show");
    btnClear = document.getElementById('clear');
    btnPlayer = document.getElementById("getPlayer");
    console.log(p4.getStatsHTML());
    btnClear.addEventListener("click", function() {
      console.log("click");
      divShow.innerHTML = "";
    });
    invertColor(vert, rouge);
    invertColor(rouge, vert);
    // swapLetters(prompt());
    swapLetters('constructeur');
    swapLetters('javascript');
    // drawRow(6, 9);
    console.log(drawRow(4, 7));
    console.log('non palindrome est un palindrome =>');
    estUnPalindrome('non palindrome');
    console.log('bob est un palindrome =>');
    estUnPalindrome('bob');
    console.log('rotor est un palindrome =>');
    estUnPalindrome('rotor');
    console.log('Kayak est un palindrome =>');
    estUnPalindrome('Kayak');
  }

  return {
    iC: invertColor
  }
}());

// var str = "",
//   nb = '0123456789';
// for (var i = 0; i < 10; i++) {
//   str += nb.split("");
//   console.log(str);
// }
// return "#" + str;
