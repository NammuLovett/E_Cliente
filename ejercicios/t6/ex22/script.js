let s = document.getElementById('prueba');
function darFormato() {
  s.classList.add('fondoAzul', 'negrita', 'textoRojo');
}

function quitarFormato() {
  s.classList.remove('fondoAzul', 'negrita', 'textoRojo');
}

function toggleFormato() {
  s.classList.toggle('fondoAzul');
  s.classList.toggle('negrita');
  s.classList.toggle('textoRojo');
}
