//Creamos un evento que reaccione al movimiento del ratón
document.addEventListener('mousemove', function (ev) {
  console.log(ev.clientX, ev.clientY, ev.pageX, ev.pageY);

  //La coordenada x del ratón menos la mitad del contenedor que lo persigue para que el primero quede en el centro
  let x = ev.clientX - 70;
  console.log(x);

  //La coordenada y del ratón menos 20, el valor para que quede el ratón en el centro del contenedor
  let y = ev.clientY - 70;
  console.log(y);

  let capa = document.getElementById('cuadro');

  //Cambiamos la posición de la capa para poder ponerle las propiedades top y left para el desplazamiento del ratón
  capa.style.position = 'absolute';
  capa.style.left = `${x}px`;
  capa.style.top = `${y}px`;
});
