'use strict';

/*
Realizar una aplicación que muestre en diferentes cuadros de diálogo la solución a los
ejercicios 22, 23, 24, 25.
*/

/* Ejercicio 22.- Valida un cuadro de diálogo donde se solicite al usuario su nombre y apellidos, todo ello en
el mismo cuadro.*/

let userName = '';
const userNameReg =
  /^([A-zÁÉÍÓÚáéíóúÑñ]+\s[A-zÁÉÍÓÚáéíóúÑñ]+\s[A-zÁÉÍÓÚáéíóúÑñ]+)$/;
while (!userNameReg.test(userName)) {
  userName = prompt('Escribe  su nombre y sus dos apellidos');
}

/* Ejercicio 23.- Realiza una aplicación web que pida al usuario una fecha con el formato dd/mm/aaaa. De no
ser escrita correctamente se volverá a solicitar. */

let date = '';
const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
while (!dateReg.test(date)) {
  date = prompt('fecha con el formato dd/mm/aaaa');
}

/* Ejercicio 24.- Realiza una aplicación web que pida al usuario un email. De no ser escrito correctamente se volverá a solicitar.
✓ El texto antes de la arroba podrá tener letras, números y/o los símbolos ._%+-
✓ El texto después de la arroba puede estar compuesto por letras, números, guiones, uno o dos puntos
y un dominio principal de 2 o más caracteres. */

let email = '';
const emailReg =
  /^[A-z0-9ÁÉÍÓÚÜÇÑáéíóúüçñ\._%\+\-]+@[A-z0-9ÁÉÍÓÚÜÇÑáéíóúüçñ\-]+(\.[A-z0-9ÁÉÍÓÚÜÇÑáéíóúüçñ\-]+)?\.[A-z]{2,}$/;
while (!emailReg.test(email)) {
  email = prompt(
    'Ponga el Email - El texto antes de la arroba podrá tener letras, números y/o los símbolos ._%+- El texto después de la arroba puede estar compuesto por letras, números, guiones, uno o dos puntos y un dominio principal de 2 o más caracteres'
  );
}

/* Ejercicio 25.- Realiza una expresión regular que valide una URL.
✓ Debe admitir http:// y https:// o ninguno de ellos
✓ El dominio estará formado por uno o más números, letras, puntos o guiones seguido de otro punto y
luego de dos a seis letras o puntos.
✓ Por último, debe dar la posibilidad de escribir varias carpetas.
Ejemplos que podría validar:
✓ https://www.iespuertasdelcampo.es/recursos/javascript/
✓ www.todoJS.edu.es/
(http:\/\/|https:\/\/)?www\.[A-z\.]+\.[a-z]{2,}(\/[A-z\/]+\/)?$
 */

let web = '';
const webReg =
  /^(https:\/\/|http:\/\/|[wW]{3}\.)?([wW]{3}\.)?(\w*\.)+[\w-]{2,}(\/[\w\/]+\/)?(\/)?$/;
while (!webReg.test(web)) {
  web = prompt('valide una URL');
}

document.write(`<h2>Su nombre completo es ${userName}<br>
Su fecha de nacimiento es ${date} <br>
su email es ${email} <br>
su web es ${web}</h2>`);
