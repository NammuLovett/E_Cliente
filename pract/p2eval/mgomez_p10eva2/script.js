//Recogemos el div por su clase
let cuadro = document.getElementsByClassName('cuadro')[0];

//función que genera una imagen aleatoria dentro del div
function generaImagen(ev) {
  console.log(ev.key);
  if (ev.altKey && ev.key == 'F12') {
    cuadro.style.backgroundImage = 'url("https://source.unsplash.com/random")';
  }
}

//Evento que reacciona al pulsar una tecla
document.addEventListener('keydown', generaImagen);
