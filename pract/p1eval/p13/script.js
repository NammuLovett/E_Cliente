'use strict';

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
