//Inserción del texto
do {
  var texto = prompt('Inserta Texto');
} while (texto == '' || texto == null);

//Inserción de la posición del párrafor
do {
  var pos = prompt('Inserta la posición');

  //En caso de valor incorrecto, solicitamos los números de nuevo y avisamos el error
  if (pos > 10 || pos < 1) {
    alert('El valor debe estar entre 1 y 10');
  }
} while (pos < 1 || pos > 10);

//Creamos un elemento y le insertamos el texto introducido por el usuario
let nuevo = document.createElement('li');
nuevo.textContent = texto;

//Recogemos la posición de la lista mediante su id
let lista = document.getElementById(`li${pos}`);
console.log('🚀 ~ file: index.html ~ line 44 ~ pos', pos);

//Recogemos la lista padre
let listaPadre = document.getElementById('lista');

//Insertamos el párrafo nuevo en la lista padre antes del párrafo anterior
listaPadre.insertBefore(nuevo, lista);
