/* Ejercicio 7.- Hacer una aplicación que por acción de un botón llamado Ventana, cree una ventana de 300 x
450 con un texto en negrita donde aparezcan escritas las dimensiones de la ventana actual y de la pantalla
del usuario. Al pasar 10 segundos la ventana creada se cerrará. */

/* window.onload = updateClock;

var totalTime = 10;

function updateClock() {
  document.getElementById('countdown').innerHTML = totalTime;
  if (totalTime == 0) {
    alert('Final');
  } else {
    totalTime -= 1;
    setTimeout('updateClock()', 1000);
  }
}
 */
let ventana = () => {
  //metemos en una variable para abrir la ventana
  let vent = window.open('', '', 'width=300,height=450');
  vent.document.write("<span id='countdown'></span>");

  //hay que meter en una function el .close para que funcione
  setTimeout(function () {
    vent.close();
  }, 5000);
};
