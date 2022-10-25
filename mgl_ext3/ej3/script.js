document.write('hola');

let strArr = 'hola';
strArr = Array.from(str);
console.log(strArr); //Transforma la cadena en array

function muestraArray(strArr) {
  let number = strArr.lengh; //almaceno en una variable el tamaño del array
  prompt(`El array tiene un tamaño de ${number}`);
}

muestraArray(strArr);
