// Se crea un nuevo elemento 'lista'.
let newList = document.createElement('li');
// Se crea el contenido del elemento.
newList.innerHTML = 'Soy el nuevo párrafo.';

// Se le pregunta al usuario por la posición en la que quiere introducir el nuevo li.
let position = prompt('Introduce un nuevo párrafo en la posición (1 - 10)');

// Expresión regular para validar lo recibido del usuario.
let regex = /(^[1-9]$)|(^10$)|(^null$)/; // Filtra: Número entre 1 y 9 | 10 | null.

while (!regex.test(position)) {
  // Mientras que position no sea un el filtro del regex, pregunta .
  position = prompt('La posición debe estar entre 1 y 10.'); // Se pregunta de nuevo.
}

if (position != null) {
  // Si pos no es null
  let lista = document.querySelectorAll('#lista li')[position - 1]; // Selecciona el párrafo que va a ser el siguiente al que vamos a introducir.
  document.getElementById('lista').insertBefore(newList, lista); // Introduce el nuevo párrafo antes.
}
