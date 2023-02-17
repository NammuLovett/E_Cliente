/* La variable "contador" es un contador de visitas inicializado en 0. */
let contador = 0;

/* La función "aceptarCookies" se ejecuta cuando el usuario acepta las cookies y 
crea una cookie llamada "visitas" con un valor de 1 y una duración de un año. 
También se muestra el panel del contador de visitas y se oculta el panel de las cookies. */
function aceptarCookies() {
  // Creamos una cookie con el nombre "visitas" y valor "1", con duración de 1 año
  document.cookie = `visitas=1; max-duration=60*60*24*365`;

  // Mostramos el panel del contador
  mostrarContador();

  // Ocultamos el panel de las cookies
  document.getElementById('cookie-panel').style.display = 'none';
}

/* La función "cancelarCookies" se ejecuta cuando el usuario cancela la aceptación de las cookies y se oculta el panel de las cookies. */

function cancelarCookies() {
  document.getElementById('cookie-panel').style.display = 'none';
}

/* La función "mostrarContador" se ejecuta para mostrar el panel del contador de visitas. Incrementa el valor del contador, 
actualiza la cookie "visitas" con el valor actualizado del contador y actualiza el texto del panel del contador 
con el valor actual del contador. */
function mostrarContador() {
  contador++;
  document.cookie = `visitas=${contador}; max-age=31536000`;
  document.getElementById('contador-panel').style.display = 'block';
  document.getElementById('contador').innerText = contador;
}

/* La función "cerrarSesion" se ejecuta cuando el usuario cierra la sesión y elimina la cookie "visitas". 
Reinicia el valor del contador a 0, muestra el panel de las cookies y oculta el panel del contador de visitas. */

function cerrarSesion() {
  document.cookie = 'visitas=; max-age=0';
  contador = 0;
  document.getElementById('cookie-panel').style.display = 'block';
  document.getElementById('contador-panel').style.display = 'none';
}

/* La variable "visitas" comprueba si existe una cookie "visitas" y si es así, se actualiza el valor del contador 
y se muestra el panel del contador de visitas. Si no hay una cookie "visitas", se muestra el panel de las cookies. */

let visitas = document.cookie.match(/visitas=([^;]+)/);

if (visitas) {
  contador = Number(visitas[1]);
  mostrarContador();
} else {
  document.getElementById('cookie-panel').style.display = 'block';
}
