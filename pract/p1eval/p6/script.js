'use strict';

let num = 0;
let contador = 0;
let randomNum = parseInt(Math.random() * 101);
num = prompt('Adivina el número comprendido entre 1 y 100'); //Le solicita un número al usuario

while (isNaN(num)) {
  //Mientras que el dato que le solicita al usuario no sea un número, va a ejecutar el prompt y no hace falta usar el parseInt.
  alert(`${num} no es un número`);
  num = prompt('Introduce un número');
}

while (num != randomNum) {
  if (num > randomNum) {
    alert('El número que tienes que acertar es más bajo');
    num = prompt('Introduce un número');
    contador++;
  } else {
    alert('El número que tienes que acertar es más alto');
    num = prompt('Introduce un número');
    contador++;
  }
}
document.write(
  `<h2>Enhorabuena, has acertado, el número era el </br>
  ${randomNum} </br> y has necesitado ${contador} intentos</h2>
  <input type="button" value="Jugar de nuevo" onclick="location.reload()"/>
  `
);
