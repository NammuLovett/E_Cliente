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
const dniReg =
  /^[KLXYZklxyz0-9][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]$/;
let numUserDni = userDni.substring(1, 8);
let userLetra = userDni.substring(8, 9);

while (userName.length == 0 || !userDni.match(dniReg)) {
  userDni = prompt(
    'Por favor introduce tu DNI válido, debe tener los 9 caracteres, 8 números y una letra válida al final'
  );
}
// 15 - Vamos a validar correctamente un código postal español. Para ello solo hay que tener en cuenta que su valor irá del 01000 al 52999. ¿Funcionaría con el código 47512?
let codPosReg = /(^[1-4][0-9]{4}$)|(^[5][0-2][0-9]{3}$)|(^[0][1-9][0-9]{3}$)/;

while (codPosReg.length == 0 || !usercodPos.match(codPosReg)) {
  let usercodPos = prompt('Por favor introduce un código postal válido');
}

//17 - Una dirección IP , ¿Cómo harías para que admitiera direcciones como 192.6.0.27?
let ipAddReg =
  /(((^([01]?[0-9]?[0-9]))|(^2[0-4][0-9])|(^25[0-5]))\.)(((([01]?[0-9]?[0-9]))|(2[0-4][0-9])|(25[0-5]))\.){2}((([01]?[0-9]?[0-9])$)|(2[0-4][0-9]$)|(25[0-5]$))/;

while (ipAddUser.length == 0 || !ipAddUser.match(codPosReg)) {
  let ipAddUser = prompt('Por favor introduce una IP válida');
}
