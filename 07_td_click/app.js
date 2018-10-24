var myTpClick = (function() {

  function displayMsg() {
    alert('Mon alerte fonctionne');
  };

  function getDisplayBtn() {
    var getBtn = document.querySelectorAll('.btn');
    console.log(getBtn);
    for (var i = 0; i < getBtn.length; i++) {
      getBtn[i].addEventListener('click', function() {
        displayMsg();
      })
    }
  }

  window.onload = function() {
    getDisplayBtn();
  };

  return {
     click: displayMsg
   };

}());

function actifInactif() {
  var icon = document.getElementById("changeIcon");
  icon.classList.toggle("is-active");
}

// var tpCLick = (function() {
//   var getBtn;
//
//   function displayMsg() {
//     alert('Mon action fonctionne');
//   }
//
//   function getClickOnBtn() {
//     var i;
//     for (i = 0; i < getBtn.length; i++) {
//       getBtn[i].onclick = displayMsg;
//     }
//   }
//
//   window.onload = function() {
//     getBtn = document.querySelectorAll(".btn");
//     getClickOnBtn();
//   };
//
//   return {
//     click: displayMsg
//   };
//
// }());
