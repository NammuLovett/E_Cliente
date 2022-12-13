/*Ejercicio 19.- Mejoremos el Código4. Cuando pulsemos el botón cambiaremos su nombre a
Lectura/Escritura o a Solo Lectura, dependiendo del valor de la propiedad readonly.*/

let entrada = document.querySelector('input');
let button = document.querySelector('button');
function soloLee() {
  if (entrada.hasAttribute('readonly')) {
    entrada.removeAttribute('readonly');
    button.innerHTML = 'Cambiar a Solo lectura';
    entrada.setAttribute('value', 'Escribe aqui...');
  } else {
    entrada.toggleAttribute('readonly');
    entrada.setAttribute('value', 'No se permite escritura');
    button.innerHTML = 'Cambiar a Lectura/Escritura';
  }
}
