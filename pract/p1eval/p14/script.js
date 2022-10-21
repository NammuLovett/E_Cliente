'use strict';

function cambiaColor() {
  let x = parseInt(Math.random() * 256);
  let y = parseInt(Math.random() * 256);
  let z = parseInt(Math.random() * 256);
  //Generamos tres números aleatorios para r g b
  let bgColor = `rgb(${x},${y},${z})`; //meto los núneros en una variable para que sea más sencillo de manejar
  return document.write(`<div style="background-color:${bgColor}"> </div>`);
  //Con el document.write introduzco un div con el style aleatorio para que lo inyecte al refrescar.
}

function intervaloCambio() {
  setInterval(cambiaColor(), 1000);
}
intervaloCambio();
/* 
let parImpar = (value) => {
    return value % 2 == 0 ? 'par' : 'impar';
  };

  setInterval(func, 1000);
  setTimeout;

  document.write(parImpar(78)); */
