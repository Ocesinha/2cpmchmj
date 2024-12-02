let optionsButton = document.querySelector('.btn-options');
let optionsList = document.querySelector('#options');
let clicado = false;

optionsButton.addEventListener('click', function() {
    if (clicado) {
      optionsList.style.display = 'none';
      clicado = false;
    } else {
      optionsList.style.display = 'block';
      clicado = true;
    }
  });