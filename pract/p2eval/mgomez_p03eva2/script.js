// Se crea un nuevo elemento 'lista'.
let newList = document.createElement('lista');
// Se crea el contenido del elemento.
newList.innerHTML = 'Soy el nuevo párrafo.';

// Se le pregunta al usuario por la posición en la que quiere introducir el nuevo li.
let position = prompt('Introduce un nuevo párrafo en la posición (1 - 10)');

// Expresión regular para validar lo recibido del usuario.
let regex = /(^[1-9]$)|(^10$)|(^null$)/; // Número entre 1 y 9; o 10;o null.

while (!regex.test(position)) {
  // Mientras pos no concuerde con la expresión regular.
  position = prompt('La posición debe estar entre 1 y 10.'); // Se pregunta de nuevo.
}

if (position != null) {
  // Si pos no es null
  let lista = document.querySelectorAll('#ol lista')[position - 1]; // Selecciona el párrafo que va a ser el siguiente al que vamos a introducir.
  document.getElementById('ol').insertBefore(newList, lista); // Introduce el nuevo párrafo antes.
}
