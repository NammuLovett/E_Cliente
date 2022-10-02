'use strict';

/* El cifrado César consiste en tomar cada letra de un mensaje y desplazarla en el alfabeto el número que diga una clave. Por ejemplo, la letra A desplazada con clave 2, se convertirá en C. Aunque el cifrado César funciona con un alfabeto completo y por desplazamiento (en el ejemplo anterior la letra Z se suele convertir en B) se pide crear una página que pida al usuario un texto y una clave y escriba el mismo texto, pero desplazando los caracteres en la tabla Unicode el número que indique la clave. */

let key = 0;
let str = '';
let newStrArr = [];
const alfa = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'Ñ',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

while (isNaN(key) || key < 1 || key > 100) {
  key = parseInt(
    prompt('Introduce para la clave un número entre el 1 y el 100')
  );
}

while (!isNaN(str) || str.length === 0) {
  // No puede estar vacío o número ) {
  str = prompt('Introduce un texto para cifrar');
}

let strArr = Array.from(str);
console.log(strArr); //Transforma la cadena en array

//Recorremos y comparamos los arrays para cambiar la letra por la clave
//HOLA

for (let i = 0; i < strArr.length; i++) {
  console.log(strArr[i]);
  if (
    strArr[i] != ' ' &&
    strArr[i] != '?' &&
    strArr[i] != '¿' &&
    strArr[i] != '!' &&
    strArr[i] != '¡' &&
    strArr[i] != ',' &&
    strArr[i] != '.'
  ) {
    for (let j = 0; j < alfa.length; j++) {
      if (strArr[i].toUpperCase() == alfa[j]) {
        let sumKey = j + key;
        if (sumKey > 26) {
          sumKey -= 27;
        }
        let newVar = alfa[sumKey];
        newStrArr.push(newVar);
      }
    }
  } else {
    newStrArr.push(strArr[i]);
  }
}

document.write(`<h2>Su clave es ${newStrArr.join('')}</h2>`);
