//Recogemos el body, aunque también podríamos hacerlo con document.body
const body = document.getElementById('cuerpo');

//Recorremos la altura de la página
height = body.scrollHeight;

//Comenzamos una cuenta atrás de 5 segundos que, al finalizar, nos envíe al final de la página
const tiempo = setTimeout(function () {
  window.scroll({
    top: height,
    left: 0,
    behavior: 'smooth',
  });
}, 5000);
