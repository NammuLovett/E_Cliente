/* Selecciona una fecha para la cuenta atrás, mi cumpleaños*/
let fechaCuentaAtras = new Date('Jul 16, 2023 12:00:00').getTime();

/* Actualiza la fecha cada segundo */
let x = setInterval(function () {
  /* función que obtiene la fecha actual */
  let fechaActual = new Date().getTime();

  /* Resta la fecha futura a la actual */
  let diferenciaTime = fechaCuentaAtras - fechaActual;

  /* Cálculos de las variables de tiempo */
  let days = Math.floor(diferenciaTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (diferenciaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((diferenciaTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diferenciaTime % (1000 * 60)) / 1000);

  /* Salída del resultado de la diferencia con el ID DEMO */
  document.getElementById('countdown').innerHTML =
    "<span class='days'>" +
    days +
    "</span><span class='hours'>" +
    hours +
    "</span><span class='minutes'>" +
    minutes +
    "</span><span class='seconds'>" +
    seconds +
    '</span>';
}, 1000);
