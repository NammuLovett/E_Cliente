/* Funcionamiento:
➢ Usuario: El nombre de usuario solo puede estar formado por 1 o más letras minúsculas y 1 o más cifras, de otro modo, indicaremos el error y pediremos de nuevo el nombre.
➢ Password: Lo que validaremos de la contraseña es que, al menos, tenga un elemento de los siguientes:
o Una letra mayúscula
o Una letra minúscula
o Un número
o Un carácter que no sea letra ni número */

let userName = '';
let passw = '';
//Expresiones regulares
const nameReg = /(?=.*[a-z]).*/;
const contReg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*/;

while (userName.length == 0 || !userName.match(nameReg)) {
  userName = prompt(
    'Introduce un nombre válido, debe tener 1 o más letras en minúscula'
  );
}
console.log(userName);
while (passw.length == 0 || !passw.match(contReg)) {
  passw = prompt(
    'Introduce una contraseña válida, debe tener al menos 1 Mayúscula, 1 minúscula, 1 número y un caracter especial'
  );
}
console.log(passw);
document.write(`<p><h2>Tu nombre de usuario es ${userName}</h2></p>`);
document.write(`<p><h2>Tu contraseña es ${passw}</h2></p>`);
