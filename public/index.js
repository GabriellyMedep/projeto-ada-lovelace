const carrossel = document.querySelector('.carrossel');
const imagens = carrossel.querySelectorAll('img');
let indice = 0;

function exibirImagem() {
  for (let i = 0; i < imagens.length; i++) {
    imagens[i].style.display = 'none';
  }

  imagens[indice].style.display = 'block';
}

function avancarImagem() {
  indice++;

  if (indice > imagens.length - 1) {
    indice = 0;
  }

  exibirImagem();
}

setInterval(avancarImagem, 3000);