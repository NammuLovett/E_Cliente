//Recogemos el div de texto y el botón
let capa = document.getElementsByClassName('texto')[0];
let boton = document.getElementsByName('boton')[0];
console.log(capa);

//Comprobamos los valores del scroll en que se encuentra el usuario
capa.addEventListener('scroll', function (ev) {
  let altura = capa.clientHeight;
  console.log('client ' + altura);

  let alturaGrande = capa.scrollHeight;
  console.log('scroll ' + alturaGrande);

  let topo = capa.scrollTop;
  console.log('top ' + topo);

  //Comprobamos que la posición del usuario es el final para mostrar el botón
  if (topo + altura == alturaGrande) {
    boton.style.opacity = 100;
  }
});

function cierra() {
  //Cerramos la ventana si se pulsa el botón, ya que cuenta con el atributo onclick
  let padre = capa.parentNode;
  console.log('🚀 ~ file: index.html ~ line 77 ~ cierra ~ padre', padre);

  padre.removeChild(capa);
}
