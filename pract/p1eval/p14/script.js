/*




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
