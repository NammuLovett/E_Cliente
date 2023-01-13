let parrafos = document.getElementsByTagName('p');

for (let p of parrafos) {
  let text = p.textContent;
}

let numPalabras = text.split(' ').length;
