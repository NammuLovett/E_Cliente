/*

La función Fibonacci está relacionada con una sucesión de elementos donde los dos
primeros son el cero y el uno, y el resto son la suma de sus dos anteriores. Ejemplo:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
✓ Así si pasamos el número 10, devolvería 55.


*/

let num = prompt('Inserta un número');
aux1 = 0;
aux2 = 1;
res = 0;

document.write(aux1 + ' ' + aux2 + ' ');

for (i = 2; i < num; i++) {
  res = aux1 + aux2;

  document.write(res + ' ');

  aux1 = aux2;
  aux2 = res;
}
