//Función para abrir google si no se pulsa el botón, ya que se encuentra en el atributo onclick
function abreGoogle() {
  location.href = 'https://www.google.es/';
}

//En caso de que pasen 5 segundos te envía a duckduckgo
var tiempo = setTimeout(function () {
  location.href = 'https://duckduckgo.com/';
}, 5000);
