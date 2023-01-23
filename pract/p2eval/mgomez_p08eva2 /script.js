/* Se crea una variable con el id de la última fila */
let rowIdFinal = 1;

/* Función para añadir fila al final de la tabla */
function addFila() {
  /* se comprueba que el campo no está vacío */
  if (document.getElementById('texto').value !== '') {
    /* crea la fila */
    let tr = document.createElement('tr');
    /* aumenta en +1 el ID de la fila */
    rowIdFinal += 1;
    /* Se añade la columna texto */
    tr.innerHTML =
      "<td id='fila" +
      rowIdFinal +
      "'>" +
      document.getElementById('texto').value +
      '</td>';
    /* La columna de mayus, tiene la función que le pasa el ID de la fila  a la que corresponde*/
    tr.innerHTML +=
      "<td><button onclick='mayus(`fila" +
      rowIdFinal +
      "`)'>Mayúsculas</button></td>";
    /*La columna chachi, tiene la función que le pasa el ID de la fila a la que corresponde*/
    tr.innerHTML +=
      "<td><button onclick='formatoChachi(`fila" +
      rowIdFinal +
      "`)'>Formato chachi</button></td>";
    /* toma el valor de los elementos de la tabla */
    let table = document.getElementsByTagName('tbody')[0];
    /* Se añade la nueva fila al final de la tabla */
    table.appendChild(tr);
  }
}

/* Función para transformar el texto en mayúscula */
function mayus(id) {
  /* Se le asigna la clase del CSS para que pueda intercambiarla a Mayúscula*/
  document.getElementById(id).classList.toggle('mayus');
}

/* Función para transformar el texto el texto en chachi */
function formatoChachi(id) {
  /* Se le asigna la clase del CSS para que pueda intercambiarla a Chachi*/

  document.getElementById(id).classList.toggle('styletd');
}
