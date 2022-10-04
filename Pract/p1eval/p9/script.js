/* Funcionamiento:
➢ Usuario: El nombre de usuario solo puede estar formado por 1 o más letras minúsculas y 1 o más cifras, de otro modo, indicaremos el error y pediremos de nuevo el nombre.
➢ Password: Lo que validaremos de la contraseña es que, al menos, tenga un elemento de los siguientes:
o Una letra mayúscula
o Una letra minúscula
o Un número
o Un carácter que no sea letra ni número */

const nameReg = /(?=.*[A-Z])(.*[0-9]).*/;
const contReg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*/;

let userName = '';
let psw = '';

while (userName.length === 0 || !user.match(nameReg)) {
  userName = prompt(
    'Introduce un nombre de usuario correcto que debe tener al menos 1 minúscula'
  );
  console.log(userName);
}

while (psw.length === 0 || !user.match(contReg)) {
  psw = prompt(
    'Introduce una contraseña correcta que debe tener al menos una letra mayúscula, minúscula, número y caracter alternativo'
  );
}
