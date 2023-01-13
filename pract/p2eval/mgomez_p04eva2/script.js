let parrafos = document.getElementsByTagName('p'); //obtenemos un array con los párrafos

let palabras = 0; //inicializamos una variable para contar

for (let p of parrafos) {
  //for of para iterar y sumar las palabras
  let text = p.textContent; //transforma p en string
  palabras += text.split(' ').length; //suma las palabras quitando los espacios
}

let main = document.getElementById('parrafos'); //  Identifica el contenedor de los parrafos

let mostrarContador = document.createElement('p'); // Crea un párrafo.
mostrarContador.innerText = `Hay un total de ${palabras}`; // El párrafo contiene el nº de palabras.
mostrarContador.style.fontWeight = 'bold'; // Se le aplica un estilo al párrafo.
main.insertBefore(
  mostrarContador,
  document.querySelector('#parrafos p:first-child')
); // Se inserte el párrafo al inicio del dom.

console.log(palabras);
