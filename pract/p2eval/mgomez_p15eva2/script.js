//Esta función sirve para cronometrar el tiempo parametrizado.
function temporizador(tiempo) {
  // Iinicaliza  la promesa
  let promesa = new Promise((concluido, interrupcion) => {
    // Inicializamos variable a 0 para que el contSeg de segundos vaya sumando 1.
    let contSeg = 0;
    let sumSec = setInterval(function () {
      //En el intervalo declarado de 1 segundo, aumenta el contSeg
      contSeg++;
      // Si el ContSeg es igual que el tiempo parametrizado, se muestra el mensaje y se resetea el contador.
      if (contSeg === tiempo) {
        concluido('Tiempo concluido');
        clearInterval(sumSec);
      }
    }, 1000); //Tiempo de ejecución,  cada segundo.

    /* Evento del botón */
    document.getElementById('boton').addEventListener('click', function () {
      // Si pulsa en el botón, interrumpe la promesa y se muestra el mensaje.
      interrupcion('Acción interrumpida por el usuario');
    });
  })
    /*     Si el tiempo de  respuesta ha concluido, imprime por pantalla un p con el mensaje.
     */ .then(function (mensaje) {
      document.body.innerHTML = '<p>' + mensaje + '</p>';
    })
    /*     Si el tiempo de  respuesta se ha interrumpido, imprime por pantalla un p con el mensaje. */

    .catch(function (mensaje) {
      document.body.innerHTML = '<p>' + mensaje + '</p>';
    });
}

//Invocar a la función a los 10 seg
temporizador(10);
