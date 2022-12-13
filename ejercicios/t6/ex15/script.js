/*Ejercicio 15.- Cambia el valor de todos los atributos class cuyo valor sea verdura a hortaliza. */

function cambiarElemVerduras() {
  let ul = document.getElementsByTagName('li');
  for (let li of ul) {
    if (li.getAttribute('class') == 'verdura') {
      li.setAttribute('class', 'hortaliza');
    }
    console.log(li.getAttribute('class') + ' --> ' + li.innerHTML);
  }
}
