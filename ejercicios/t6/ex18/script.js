/*Ejercicio 18.- Mejoremos un poco el ejercicio 17. Inserta un segundo botón llamado activa/desactiva
que active y desactive el primero a medida que lo pulsamos.*/

function activarDesactivar() {
  let button = document.getElementById('button');

  return button.hasAttribute('disabled')
    ? button.removeAttribute('disabled')
    : button.toggleAttribute('disabled');
}
