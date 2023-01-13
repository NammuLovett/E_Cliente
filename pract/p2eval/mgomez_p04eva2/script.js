var parrafos = document.getElementsByTagName('p');
var palabras = 0;

for (let p of parrafos) {
  var text = p.textContent;
  palabras = palabras + text.split(' ').length;
}

console.log(palabras);
