'use strict';

let randomNum = parseInt(Math.random() * 1001);
document.write(`<h2>${randomNum}</h2>`);

let num = 0;
num = prompt('Adivina el número comprendido entre 1 y 1000'); //Le solicita un número al usuario

while (isNaN(num)) {
  //Mientras que el dato que le solicita al usuario no sea un número, va a ejecutar el prompt y no hace falta usar el parseInt.
  alert(`${num} no es un número`);
  num = prompt('Introduce un número');
}
let contador = 0;
while (num != randomNum) {
  num > randomNum ? alert('El número es menor') : alert('El número es mayor');
  contador++;
}

document.write(`<h2>Has necesitado${contador} intentos</h2>`);
