'use strict';

let userDni = prompt('Por favor introduce tu DNI');
let numUserDni = userDni.substring(0, 8);

while (
  userDni.length != 9 || //No puede tener menos de 9 caracteres.
  userDni.length === 0 || // No puede estar vacío = 0
  isNaN(numUserDni) || //los 8 primeros caracteres tiene qu eser un número
  !isNaN(userDni.substring(8, 9)) // el último caracter debe ser una letra
) {
  userDni = prompt(
    'Por favor introduce tu DNI válido, debe tener los 9 caracteres, 8 números y una letra válida al final'
  );
}

function letraDNI(numUserDni) {
  let letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
  let pos = dniSinLetra % 23;

  if (userDni == numUserDni + letra.charAt(pos)) {
    return document.write(
      `<h2>La validación de tu DNI es correcta, tu DNI es ${userDni}</h2>`
    );
  } else {
    return `<h2>La letra de tu DNI no coincide, tu DNI debería ser ${numUserDni} + letra.charAt(pos)</h2>`;
  }
}

letraDNI(numUserDni);
