//INFO
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

let juego1 = new datos();

//La función inserta datos pertenece al objeto datos y se encarga de recoger la información
//para crear un nuevo juego de buscaminas
juego1.insertaDatos();

//Esta función se encarga colocar el valor necesario en cada celda de la tabla, ya sea valor
//o número
function Mina(fila, col, min) {
  this.fila = fila;
  this.col = col;
  this.min = min;

  this.celdaAleatoria = function (fila, col, min) {
    //cedaRandom es un array en el que almacenaremos otro array
    const celdaRandom = new Array(this.fil);

    //alFila es un array de números aleatorios para conocer en qué fila cae la mina
    const alFila = new Array();

    //alCol es un array de números aleatorios para conocer la columna de la mina
    const alCol = new Array();
    numMinas = 0;

    for (i = 0; i < fila; i++) {
      //Creamos el array dentro del otro array
      celdaRandom[i] = new Array(col);
    }

    //console.log(celdaRandom);

    //Comprobamos que el número de minas actuales no sobrepase el número de minas
    //solicitadas por el usuario
    while (numMinas < min) {
      //console.log(numMinas);

      //console.log(celdaRandom.length);
      //console.log(min);

      //Elegimos la fila aleatoria
      numAlFila = parseInt(Math.random() * fila);
      //alFila[i] = numAlFila;

      //Elegimos la columna aleatoria
      numAlCol = parseInt(Math.random() * col);
      //alCol[i] = numAlCol;

      for (j = 0; j < fila; j++) {
        for (k = 0; k < col; k++) {
          console.log(`Fila ${j} => ${numAlFila}`);
          console.log(`Col ${k} => ${numAlCol}`);

          if (j == numAlFila) {
            if (k == numAlCol) {
              //Esta parte del if es para que no se sobreescriban minas
              if (celdaRandom[j][k] != 'X') {
                //En caso de que los valores del bucle for coincidan con
                //la fila y la columna, asignamos una X para saber
                //que hay una mina
                celdaRandom[j][k] = 'X';
                numMinas++;
              }
            }
          }
        }
      }
    }

    for (j = 0; j < fila; j++) {
      for (k = 0; k < col; k++) {
        //Aquí asignamos el valor cero a las celdas en que no hay minas
        if (celdaRandom[j][k] != 'X') {
          celdaRandom[j][k] = 0;
        }
      }
    }

    return celdaRandom;
  };

  //Esta función crea la tabla donde mostraremos el juego
  this.creaTabla = function (fil, col, min) {
    console.log('Entra creaTabla');
    /*console.log(`Filas:  ${fil}`);
                console.log(`Cols:  ${col}`);
                console.log(`Minas:  ${min}`);*/

    //Llamamos a la función celdaAleatoria para almacenar en la variable minas
    //las minas
    var minas = this.celdaAleatoria(fil, col, min);

    document.write('<table>');

    for (i = 0; i < fil; i++) {
      console.log('check1');

      document.write('<tr>');

      for (j = 0; j < col; j++) {
        if (minas[i][j] == 'X') {
          //Escribimos un asterisco en caso de que el valor i, j del array sea X
          document.write('<td>💣</td>');
        } else {
          //En caso de que no haya una mina, llamamos a la función cuentaMinas
          //para calcular el número de minas alrededor
          document.write(`<td>${this.cuentaMinas(i, j, minas, fil, col)}</td>`);
        }
      }

      document.write('</tr>');
    }

    document.write('</table>');
  };

  //Esta función recorre las celdas arrededor de la seleccionada
  //y devuelve el número de minas que hay alrededor
  this.cuentaMinas = function (i, j, minas, fil, col) {
    minaCerca = 0;

    console.log(minas[i][j]);

    //Todos estos if sirven para rodear la celda en la que nos encontramos
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
  };
}

//Introducimos los datos mediante esta función
function datos() {
  this.insertaDatos = function () {
    do {
      var fil = prompt('Inserta el número de filas');
    } while (
      (fil < 2 || fil == null || fil == '' || isNaN(fil)) &&
      fil != false
    );

    do {
      var col = prompt('Inserta el número de columnas');
    } while (
      (col < 2 || col == null || col == '' || isNaN(col)) &&
      col != false
    );

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

    mina1 = new Mina();
    mina1.creaTabla(fil, col, min);
  };
}
