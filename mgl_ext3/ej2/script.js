'use strict';

document.write('hola');

let userString = 'yo hago yoga hoy';
userString = userString.replace(/\s/g, ''); //quitar los espacios a la cadena

function esPalindromo(userString) {
  //recibe variable (array en este caso)
  capicua = true;
  let j = userString.length - 1; //almacena el tamaño del array -1 para indicar la última posición

  for (let i = 0; i < userString.length / 2 - 1; i++) {
    if (userString[i] != userString[j]) {
      capicua = false;
    }
    j--;
  }
  return capicua;
}

esPalindromo(userString);
