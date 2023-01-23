//Recogemos el div por su clase
let capa = document.getElementsByClassName('capa')[0];

//Función para cambiar el fondo a verde
function coloreaVerde() {
  capa.style.backgroundColor = 'green';
}

//Función para cambiar el fondo a azul o rojo en función del botón del ratón pulsado
function coloreaRojoAzul(ev) {
  //0 es el botón principal del ratón
  if (ev.button == 0) {
    capa.style.backgroundColor = 'red';

    //2 es el botón secundario
  } else if (ev.button == 2) {
    ev.preventDefault();
    capa.style.backgroundColor = 'blue';
  }
}

//Creamos los eventos para la hora de pulsar un botón o pasarlo por encima
capa.addEventListener('mousedown', coloreaRojoAzul);
capa.addEventListener('mouseover', coloreaVerde);
capa.addEventListener('mouseup', coloreaVerde);

//Evento para evitar que salga el menú contextual, ya que por defecto, sale al hacer click derecho
document.addEventListener('contextmenu', (ev) => {
  ev.preventDefault();
});
