'use strict';

let strArr = 'una cadena cani es como esta';

function toCani(strArr) {
  let strArr = Array.from(str);
  console.log(strArr); //Transforma la cadena en array

  //Recorremos y comparamos los arrays para cambiar la letra por la clave
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] != ' ') {
      for (let j = 0; j < alfa.length; j++) {
        if (strArr[i].toUpperCase() == alfa[j]) {
          let sumKey = j + key;
          let newVar = alfa[sumKey]; //Creamos una nueva variable para la referencia nueva del abecedario
          newStrArr.push(newVar); //meterá el caracter en el array
        }
      }
    } else {
      newStrArr.push(strArr[i]); //Si es un ' ', metemos una posición vacía en el array.
    }
  }
  document.write(`<h2>Su clave es ${newStrArr.join('')}</h2>`); //Metemos un join para mostrar el array
}

toCani(strArr);
