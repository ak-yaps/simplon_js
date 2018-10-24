var app = (function() {
  "use strict";



  const init = function init() {
    const btn_valid = document.getElementById('btn_valid');
    const nb = document.getElementById('input_nb');
    const color = document.getElementById('input_color');
    const divContent = document.getElementById('blocks');
    const actives = document.querySelectorAll('.block.is-active');

    function toggleActive() {
      this.classList.toggle('is-active');
      // console.log(this.className);
    }

    function createBlock() {
      for (let i = 0; i < nb.value; i++) {
        const div = document.createElement('div');
        div.classList.add("block");
        // div.classList.add('create_and_color', 'is-active');
        div.style.backgroundColor = color.value;
        divContent.appendChild(div);
        div.addEventListener('click', toggleActive)
      }
    }

    function updateBlock() {
      for (var i = 0; i < actives.length; i++) {
        actives[i].style.backgroundColor = color.value;
      }

      // function getHexColor() {
      //   var color = "",
      //     signs = '0123456789abcdef';
      //   for (var i = 0; i < 6; i++) {
      //     color += signs[Math.floor(Math.random() * 16)];
      //     console.log(color);
      //   }
      //   return "#" + color;
      // }

    }

    btn_valid.addEventListener('click', function() {
      if (actives.length) {
        updateBlock();
      } else {
        createBlock();
      }

    })

    const btnReset = document.getElementById('btn_reset');
    btnReset.addEventListener('click', function() {
      console.log(btnReset);
      console.log(divContent);
    })
  };

  window.addEventListener("DOMContentLoaded", init);
}());
