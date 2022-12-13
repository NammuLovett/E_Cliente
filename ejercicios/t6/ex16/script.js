/*Ejercicio 16.- Elimina todos los atributos class con el valor carne.*/

function eliminarCarne() {
  let ul = document.getElementsByTagName('li');
  for (let li of ul) {
    if (li.getAttribute('class') == 'carne') {
      li.removeAttribute('class');
    }
    console.log(li.getAttribute('class') + ' --> ' + li.innerHTML);
  }
}
