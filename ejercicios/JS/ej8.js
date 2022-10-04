/* Ejercicio 8.- Usando un “array de arrays” o array bidimensional, vamos a crear una aplicación que pida 5 notas para tres alumnos. Funcionaría así:
1) Nuestro array principal tendrá tres elementos de tipo array. Guardarán la información de los alumnos.
2) Cada una de estas posiciones será un array de 6 elementos.
3) En la posición 0 guardaremos el nombre de cada alumno que será proporcionado por el usuario.
4) Las posiciones de la 1 a la 5 guardarán las notas de cada alumno, también introducidas por el usuario. El programa pide notas en el formato “Introduce nota x para el alumno y:”
5) Por último, usando el método document.write() mostrará en el documento web las 5 notas de
cada alumno en formato: */

let gente = [];

for (let i = 0; i < 3; i++) {
  //GENTE
  let persona = [];
  for (let j = 0; j < 6; j++) {
    //PERSONA
    j == 0
      ? (persona[0] = prompt('Introduce el nombre del alumno'))
      : (persona[j] = prompt(`Nota ${j}`));
  }
  gente.push(persona);
}
console.log(gente);
for (let i = 0; i < gente.length; i++) {
  for (let j = 0; j < gente[i].length; j++) {
    document.write(`<h3>${gente[i][j]}</h3>`);
    console.log(j);
    console.log(gente[i][j]);
  }
}
