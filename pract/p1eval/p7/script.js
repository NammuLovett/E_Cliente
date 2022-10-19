'use strict';

let userDni = prompt('Por favor introduce tu DNI');
let numUserDni = userDni.substring(0, 8);
let userLetra = userDni.substring(8, 9);

while (
  userDni.length != 9 || //No puede tener menos de 9 caracteres.
  userDni.length === 0 || // No puede estar vacío = 0
  isNaN(numUserDni) || //los 8 primeros caracteres tiene que ser un número
  !isNaN(userLetra) // el último caracter debe ser una letra
) {
  userDni = prompt(
    'Por favor introduce tu DNI válido, debe tener los 9 caracteres, 8 números y una letra válida al final'
  );
}

//Si hemos llegado hasta aquí significa que vamos bien y necesitamos comprobar ahora que la letra es correcta.

const letra = 'TRWAGMYFPDXBNJZSQVHLCKE'; //letras que debe tener el DNI en el orden
let pos = numUserDni % 23; //El resto nos indica la posición de la letra anterior

if (userLetra.toUpperCase == letra.charAt(pos)) {
  //Si la letra del usuario, forzando mayúscula es igual a la posición
  document.write(
    `<h2>La validación de tu DNI es correcta, tu DNI es ${userDni} </h2>`
  );
} else {
  //De lo contrario, te corrige el dni
  document.write(
    `(<h2>La letra de tu DNI no coincide, tu DNI debería ser ${numUserDni}${letra.charAt(
      pos
    )}) </h2>`
  );
}
