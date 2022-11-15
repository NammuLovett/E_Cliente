/*
Ejercicio 4.- Pares e impares

Realicemos una variante del eterno ejercicio de consulta de paridad usando "clases" y objetos para
averiguar si un número es par o impar (y alguna cosita más). Usaremos funciones anónimas dentro del
constructor. Tendremos:
✓ Un constructor o clase llamado ParImpar que recibe como argumento el número.
✓ Una propiedad x que recogerá dicho argumento.
✓ Un método error() que muestre por consola el mensaje “Dato erróneo” (puedes usar
console.error) si no se ha recibido un número, o "Dato correcto" en caso contrario.
✓ Un método llamado resuelve() que, mediante un cuadro de diálogo, devuelva la palabra “par” si
el número es par e “impar” en caso contrario.
✓ Un método es() que devuelva la cadena de caracteres "par" o "impar". usaremos el operador
flecha.
✓ Un método muestraRandom() que escriba en el documento 10 números aleatorios del 1 al
10000 y que a su lado se diga si es par o impar gracias al método anterior.
o Emplea un fichero externo script.js usando un constructor ParImpar() o bien scriptClass.js
si prefieres usar clases. Prueba el funcionamiento de cada código.
 */

/*---------------------------------------------------------------*/

/*
Ejercicio 4.- Pares e impares
Realicemos una variante del eterno ejercicio de consulta de paridad usando "clases" y objetos para
averiguar si un número es par o impar (y alguna cosita más). Usaremos funciones anónimas dentro del
constructor. Tendremos:
✓ Un constructor o clase llamado ParImpar que recibe como argumento el número.
✓ Una propiedad x que recogerá dicho argumento.
✓ Un método error() que muestre por consola el mensaje “Dato erróneo” (puedes usar
console.error) si no se ha recibido un número, o "Dato correcto" en caso contrario.
✓ Un método llamado resuelve() que, mediante un cuadro de diálogo, devuelva la palabra “par” si
el número es par e “impar” en caso contrario.
✓ Un método es() que devuelva la cadena de caracteres "par" o "impar". usaremos el operador
flecha.
✓ Un método muestraRandom() que escriba en el documento 10 números aleatorios del 1 al
10000 y que a su lado se diga si es par o impar gracias al método anterior.
o Emplea un fichero externo script.js usando un constructor ParImpar() o bien scriptClass.js
si prefieres usar clases. Prueba el funcionamiento de cada código.
 */

/*---------------------------------------------------------------*/
function ParImpar(num) {
  this.num = num;

  this.setNum = function (num) {
    this.num = num;
  };
  this.getNum = function () {
    return this.num;
  };

  this.esPar = function () {
    return this.num % 2 == 0 ? 'Es Par' : 'Es impar';
  };

  this.muestraNum = function () {
    return `El número:  ${this.getNum()} \n --> ${this.esPar()} `;
  };
}

let seguir = true;
let numbers = [];

do {
  let isParImpar = new ParImpar();

  isParImpar.setNum(prompt('Introduzca números para saber cual es impar:'));

  numbers.push(isParImpar);

  seguir = confirm('¿Desea seguir?');
} while (seguir == true);

for (let number of numbers) {
  alert(number.muestraNum());
}
