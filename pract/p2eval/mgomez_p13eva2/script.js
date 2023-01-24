/* Asignamos a la variables origen/destino el ID */
let origen = document.getElementById('origen');
let destino = document.getElementById('destino');

/* Se añade el evento para cuando se empiece a arrastrar */
document.addEventListener('dragstart', function (event) {
  /* Asignamos a la variable origen el objetivo del drag */
  origen = event.target;
});

/* Evitar que se lleve a cabo el comportamiento por defecto de volver al sitio inicial */
document.addEventListener('dragover', function (event) {
  event.preventDefault();
});

/* Evento que se ejecuta cuando entra en el destino */
document.addEventListener('dragenter', function (event) {
  /* Se modifica el color de fondo cuando se ejecute el evento en el destino */
  if (event.target.className == 'destino') {
    event.target.style.background = 'red';
  }
});

/*Evento que se ejecuta al dejar en el destino y mover el origen*/
document.addEventListener('dragleave', function (event) {
  //Devolver el color a blanco cuando se deja el destino
  if (event.target.className == 'destino') {
    event.target.style.background = 'white';
  }
});

/*Evento que se ejecuta al soltar en el destino el origen*/
document.addEventListener('drop', function (event) {
  event.preventDefault();

  /* Si el la clase del evento objetivo es destino, el fondo de este se cambia a naranja y el origen a blanco */
  if (event.target.className == 'destino') {
    event.target.style.background = 'orange';
    origen.style.backgroundColor = 'white';

    /* Se ha de rellenar el origen con un espacio en blanco para que desaparezca el div inicial  */
    origen.innerHTML = '';
  }
});
