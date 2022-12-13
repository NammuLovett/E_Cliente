/*Ejercicio 14.- Usa un bucle for..of para conseguir el valor de todos los atributos class de los elementos
li dentro de ul. Hazlo en la forma clase --> valor (Ej: listado.getAttribute(“class”) --> listado.innerHTML) */

function listarVerduras() {
  //saca elementos de la lista
  let ul = document.getElementsByTagName('li');
  for (let li of ul) {
    console.log(li.getAttribute('class') + ' --> ' + li.innerHTML);
  }
}
