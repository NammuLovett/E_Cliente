function muestraRefranes(refranes, nRefran) {
  console.log('Entré --> ' + nRefran);
  //Recibe el valor aleatorio con la posición del refran en el array Refranes
  //y luego lo muestra en un párrafo con innerHTML
  document.getElementById('parrafo').innerHTML += `<h2>Refrán del momento -->
  ${refranes[nRefran]}</h2>`;
}

function cogeRefranes() {
  var refranes = []; //Aquí almacenamos nuestros refranes.
  var salir = false;
  do {
    //Si el usuario no introduce nada salir==true y salimos, si introduce un valor no alfabético
    //mostramos un alert avisando y seguimos. Si introduce un valor válido lo metemos en el
    //array de cadenas.
    var cad = prompt('Introduce un refrán. No pongas nada para terminar...');
    if (cad == '') salir = true;
    //Caracteres alfabéticos, diacríticos y espacios, tanto mayúscula como minúscula
    else if (!/^[\sa-z\u00C0-\u00FF]+$/i.test(cad))
      alert('Introduce datos correctos (solo letras).');
    else refranes.push(cad);
  } while (!salir);

  //Elegimos un número aleatorio entre 0 y el total del array de cadenas menos 1
  //console.log(refranes);
  //El usar una función anónima es importante ya que, de no usarla, setInterval() no funcionará.
  //Si tienes que llamar a alguna función, ponla siempre dentro de la anónima.
  setInterval(function () {
    muestraRefranes(refranes, Math.floor(Math.random() * refranes.length));
  }, 2000);
}
