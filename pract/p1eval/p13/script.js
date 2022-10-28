fig; //INFO
/* 
La entrada de datos serán números enteros superiores o iguales a 2.
o Las filas y/o columnas no podrán ser superiores a 20.
o El número de minas nunca podrá ser igual o superior a columnas x filas /2.
-
Se pedirá al usuario el tamaño del tablero y las minas a colocar.
La validación de datos consistirá en:
 - La entrada de datos serán números enteros superiores o iguales a 2.
 - Las filas y/o columnas no podrán ser superiores a 20.
o El número de minas nunca podrá ser igual o superior a columnas x filas /2. */
//FUNCIONES
/* 
 - insertaMinas() a la que le pasemos el tablero buscaminas (sería un array de dos dimensiones) y coloque en él de manera aleatoria las minas.
 - nMinasPos() que reciba el array del tablero y una posición en él.     Devolverá las minas alrededor de esa posición.
 - minasCerca() que recorra el tablero marcando en cada casilla las minas que hay alrededor.
 - dibujaTablero() que dibuje el tablero en una página web. Recibe como argumentos las filas y columnas. Rellenará el tablero de ceros o falses. */

insertaDatos();

function insertaDatos() {
  do {
    var fil = prompt('Inserta el número de filas');
  } while ((fil < 2 || fil == null || fil == '' || isNaN(fil)) && fil != false);

  do {
    var col = prompt('Inserta el número de columnas');
  } while ((col < 2 || col == null || col == '' || isNaN(col)) && col != false);

  do {
    var min = prompt('Inserta el número de minas');

    if (min >= (fil * col) / 2) {
      alert(`Debes insertar un número de minas menor que ${(fil * col) / 2}`);
    }
  } while (
    (min < 2 || min == null || min == '' || min >= (fil * col) / 2) &&
    min != false
  );

  //console.log("Termina pedir datos");
  creaTabla(fil, col, min);
}

function creaTabla(fil, col, min) {
  //console.log("Entra creaTabla");
  console.log(`Filas:  ${fil}`);
  console.log(`Cols:  ${col}`);
  console.log(`Minas:  ${min}`);

  var minas = celdaAleatoria(fil, col, min);

  document.write('<table>');

  for (i = 0; i < fil; i++) {
    document.write('<tr>');

    for (j = 0; j < col; j++) {
      if (minas[i][j] == 'X') {
        document.write('<td>💣</td>');
      } else {
        document.write(`<td>${cuentaMinas(i, j, minas, fil, col)}</td>`);
        //${cuentaMinas(fil, col, minas)}
      }
      //document.write(`<td></td>`);
    }

    document.write('</tr>');
  }

  document.write('</table>');
}

function celdaAleatoria(fil, col, min) {
  //console.log("Entra celdaAleatoria");

  const celdaRandom = new Array(fil);
  const alFila = new Array();
  const alCol = new Array();
  numMinas = 0;

  for (i = 0; i < fil; i++) {
    celdaRandom[i] = new Array(col);
  }

  //console.log(celdaRandom);

  while (numMinas < min) {
    //console.log(numMinas);

    //console.log(celdaRandom.length);
    //console.log(min);

    numAlFila = parseInt(Math.random() * fil);
    //alFila[i] = numAlFila;
    numAlCol = parseInt(Math.random() * col);
    //alCol[i] = numAlCol;

    for (j = 0; j < fil; j++) {
      for (k = 0; k < col; k++) {
        //console.log(`Fila ${j} => ${numAlFila}`);
        //console.log(`Col ${k} => ${numAlCol}`);

        if (j == numAlFila) {
          if (k == numAlCol) {
            if (celdaRandom[j][k] != 'X') {
              celdaRandom[j][k] = 'X';
              numMinas++;
            }
          }
        }
      }
    }
  }

  for (j = 0; j < fil; j++) {
    for (k = 0; k < col; k++) {
      if (celdaRandom[j][k] != 'X') {
        celdaRandom[j][k] = 0;
      }
    }
  }

  return celdaRandom;
}

function cuentaMinas(i, j, minas, fil, col) {
  minaCerca = 0;

  console.log(minas[i][j]);

  if (i > 0) {
    if (minas[i - 1][j] == 'X') {
      minaCerca++;
    }

    if (j > 0) {
      if (minas[i - 1][j - 1] == 'X') {
        minaCerca++;
      }
    }

    if (j < col - 1) {
      if (minas[i - 1][j + 1] == 'X') {
        minaCerca++;
      }
    }
  }

  if (i < fil - 1) {
    if (minas[i + 1][j] == 'X') {
      minaCerca++;
    }

    if (j < col - 1) {
      if (minas[i + 1][j + 1] == 'X') {
        minaCerca++;
      }
    }

    if (j > 0) {
      if (minas[i + 1][j - 1] == 'X') {
        minaCerca++;
      }
    }
  }

  if (j > 0) {
    if (minas[i][j - 1] == 'X') {
      minaCerca++;
    }
  }

  if (j < col - 1) {
    if (minas[i][j + 1] == 'X') {
      minaCerca++;
    }
  }

  return minaCerca;
}
