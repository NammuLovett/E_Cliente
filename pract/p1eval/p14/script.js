'use strict';

function cambiaColor() {
  let x = parseInt(Math.random() * 256);
  let y = parseInt(Math.random() * 256);
  let z = parseInt(Math.random() * 256);
  //Generamos tres números aleatorios para r g b
  let bgColor = `rgb(${x},${y},${z})`; //meto los núneros en una variable para que sea más sencillo de manejar
  document.body.style.background = bgColor; //modificamos el objeto body style background y recibe el número aleatorio
}

setInterval(cambiaColor, 2000);

/* 
let parImpar = (value) => {
    return value % 2 == 0 ? 'par' : 'impar';
  };

  setInterval(func, 1000);
  setTimeout;

  document.write(parImpar(78)); */
