'use strict';

/* Funcionamiento:
➢ Usuario: El nombre de usuario solo puede estar formado por 1 o más letras minúsculas y 1 o más cifras, de otro modo, indicaremos el error y pediremos de nuevo el nombre.
➢ Password: Lo que validaremos de la contraseña es que, al menos, tenga un elemento de los siguientes:
o Una letra mayúscula
o Una letra minúscula
o Un número
o Un carácter que no sea letra ni número */

const cont = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*/;
const nomb = /(?=.*[A-Z])(.*[0-9]).*/;
let userName = '';
let psw = '';

while (userName == userName.length(0) || userName == !user.match(nomb)) {
  userName = prompt(
    'Introduce un nombre de usuario que debe tener al menos 1 minúscula'
  );
}
