let parrafos = document.getElementsByTagName('p'); //obtenemos un array con los párrafos

let palabras = 0; //inicializamos una variable para contar

for (let p of parrafos) {
  //for of para iterar y sumar las palabras
  let text = p.textContent; //transforma p en string
  palabras += text.split(' ').length; //suma las palabras quitando los espacios
}

console.log(palabras);
