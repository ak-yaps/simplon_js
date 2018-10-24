(function createOnLoad() {
  window.onload = function() {
    console.log('OK');
  }

  var header = document.getElementById('main_header');
  var nav = document.getElementById('main_nav');
  var aside = document.getElementById('asidebar');
  var main = document.getElementById('main_content');
  var footer = document.getElementById('main_footer');

  function getId() {

    this.addEventListener("click", function() {
      console.log(this.innerHTML += this.id);
    }, false);

getId();
  }
}());
