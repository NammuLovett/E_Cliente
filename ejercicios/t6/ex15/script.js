function listarVerduras() {
  //saca elementos de la lista
  let ul = document.getElementsByTagName('li');
  for (let li of ul) {
    console.log(li.getAttribute('class') + ' --> ' + li.innerHTML);
  }
}
