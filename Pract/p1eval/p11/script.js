/* Realizar una aplicación que muestre en diferentes cuadros de diálogo la solución a los ejercicios 13, 14, 15, 17. */

// 13 - nombre de usuario exigiendo que únicamente pueda estar compuesto por letras minúsculas, mayúsculas y números
/* let value = prompt('Introduce tu nombre de usuario:');
let regex1 = /^[A-Za-z0-9]+$/;
while (!regex1.test(value)) {
  value = prompt('Introduce tu nombre válido de usuario: ');
} */

/* const nameReg = /(?=.*[a-z]).;
const contReg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*/

//---
let userName = '';
const nameReg = /^[A-Za-z0-9]+$/;
while (userName.length == 0 || !userName.match(nameReg)) {
  userName = prompt(
    'Introduce un nombre válido, debe estar compuesto por letras minúsculas, mayúsculas y números'
  );
}
// 14 - validar un DNI Deberá constar de 9 caracteres alfanuméricos. El primero puede ser un número o un carácter K, L, X, Y, Z  El último puede ser un carácter entre TRWAGMYFPDXBNJZSQVHLCKE. El resto de caracteres son numéricos

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

// 15 - Vamos a validar correctamente un código postal español. Para ello solo hay que tener en cuenta que su valor irá del 01000 al 52999. ¿Funcionaría con el código 47512?

//17 - Una dirección IP , ¿Cómo harías para que admitiera direcciones como 192.6.0.27?
