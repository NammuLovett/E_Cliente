"use strict";

/*

➢ Con estilos CSS y un script JavaScript, se pide crear una tabla cuyas dimensiones sean pedidas al usuario mediante un cuadro de diálogo. 
La tabla ocupará el 50% de la pantalla.
➢ Llama al fichero index.html.
➢ Crea una carpeta css y otra js donde se encontrarán los ficheros estilos.css y script.js necesarios para que la práctica funcione.
➢ Usa comentarios para aclarar las decisiones de código que has tomado.
*/

let cantidad = 0;
cantidad = prompt("Introduzca un número para hacer una tabla"); //Pedimos las dimensiones de la tabla

while (isNaN(cantidad)) {
  // Reusamos código del anterior ejercicio.
  //Mientras que el dato que le solicita al usuario no sea un número, va a ejecutar el prompt y no hace falta usar el parseInt.
  alert(`${cantidad} no es un número`);
  num = prompt("Introduce un número");
}
document.write("<table>"); //Inicializamos la tabla
for (let i = 0; i < cantidad; i++) {
  //Hacemos un bucle for para hacer las filas
  document.write("<tr>"); //Escribimos las filas
  for (let j = 0; j < cantidad; j++) {
    //For para hacer las columnas de cada fila
    document.write("<td>" + i + "-" + j + "</td>"); //Escribimos las columnas
  }
  document.write("</tr>"); //Cerramos etiquetas
}
document.write("</table>"); //Cerramos etiquetas
