/* Realizar una aplicación que muestre en diferentes cuadros de diálogo la solución a los ejercicios 13, 14, 15, 17. */

let regex1 = /[A-Za-z0-9]+/;
var user = $;
while (!regex1.match(user)) {
  var user = prompt('Introduce tu nombre de usuario: ');
}
// nombre de usuario exigiendo que únicamente pueda estar compuesto por letras minúsculas, mayúsculas y números
