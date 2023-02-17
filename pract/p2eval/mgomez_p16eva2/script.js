function aceptarCookies() {
  document.cookie = 'contadorVisitas=1'; // establece una cookie llamada "contadorVisitas" con un valor de 1
  document.getElementById('mensaje').innerHTML = 'Cookies aceptadas'; // cambia el contenido del elemento con id "mensaje" a "Cookies aceptadas"
}
function rechazarCookies() {
  document.cookie =
    'contadorVisitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // elimina la cookie "contadorVisitas"
  document.getElementById('mensaje').innerHTML = 'Cookies rechazadas'; // cambia el contenido del elemento con id "mensaje" a "Cookies rechazadas"
}
function cerrarSesion() {
  document.cookie =
    'contadorVisitas=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // elimina la cookie "contadorVisitas"
  document.getElementById('mensaje').innerHTML = 'Sesión cerrada'; // cambia el contenido del elemento con id "mensaje" a "Sesión cerrada"
}

function contarVisitas() {
  let cookies = document.cookie.split(';'); // divide la cadena de cookies en un array de cookies
  for (let i = 0; i < cookies.length; i++) {
    // recorre el array de cookies
    let nombre = cookies[i].split('=')[0].trim(); // obtiene el nombre de la cookie actual
    let valor = cookies[i].split('=')[1].trim(); // obtiene el valor de la cookie actual
    if (nombre == 'contadorVisitas') {
      // comprueba si la cookie actual se llama "contadorVisitas"
      document.getElementById('mensaje').innerHTML =
        'Número de visitas: ' + valor; // muestra el número de visitas en el elemento con id "mensaje"
      document.cookie = 'contadorVisitas=' + (parseInt(valor) + 1); // actualiza el valor de la cookie "contadorVisitas" sumando 1 al valor actual
      return; // sale de la función
    }
  }
  document.getElementById('mensaje').innerHTML = 'No se han encontrado cookies'; // si no se encuentra la cookie "contadorVisitas", muestra el mensaje "No se han encontrado cookies"
}
