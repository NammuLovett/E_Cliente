'use strict';

/* El cifrado César consiste en tomar cada letra de un mensaje y desplazarla en el alfabeto el número que diga una clave. Por ejemplo, la letra A desplazada con clave 2, se convertirá en C. Aunque el cifrado César funciona con un alfabeto completo y por desplazamiento (en el ejemplo anterior la letra Z se suele convertir en B) se pide crear una página que pida al usuario un texto y una clave y escriba el mismo texto, pero desplazando los caracteres en la tabla Unicode el número que indique la clave. */
var num = 0;
var frase = '';

var fraseNueva = '';
var suma = 0;

while (num < 1 || num > 100) {
  num = prompt('Escribe el valor de cifrado entre 1-100');
}
while (frase.valueOf() == '') {
  frase = prompt('Escribe la cadena a descifrar');
}

for (i = 0; i < frase.length; i++) {
  //En este for lo que hacemos es crear la frase sumando el valor que nos ha dado en su caracter unicode

  //frase.charCodeAt(i) = parseInt(frase.charCodeAt(i)) + parseInt(num);
  console.log(frase.charCodeAt(i));
  console.log(parseInt(frase.charCodeAt(i)) + parseInt(num));

  fraseNueva += String.fromCharCode(frase.charCodeAt(i) + parseInt(num));
  //fraseNueva = String.fromCharCode(fraseNueva);
}

//console.log(frase);

alert('La cadena descifrada es... ' + fraseNueva);
