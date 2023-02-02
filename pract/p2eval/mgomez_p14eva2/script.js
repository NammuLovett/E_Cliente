/* Añadimos el evento 'click' sobre la web */
document.addEventListener('click', function (ev) {
  // Creamos un elemento DIV con el nombre de circle.
  let circle = document.createElement('div');

  // Hacemos un diámetro aleatorio hasta el número 200.
  let diameter = parseInt(Math.random() * 190 + 10);

  //Añadimos al DIV un alto y ancho en px
  circle.style.width = diameter + 'px';
  circle.style.height = diameter + 'px';

  /* Redondeamos los bordes del div para transformarlo en un círculo */
  circle.style.borderRadius = '50%';
  /* Con la propiedad posición absoluta, podremos colocar el DIV en el lugar que clickemos en la pantalla */
  circle.style.position = 'absolute';

  //Para posicionar con el click, le deberemos asignar la posición del ratón. Restamos el radio para que el ratón se posicione en el centro
  circle.style.top = ev.clientY - diameter / 2 + 'px';
  circle.style.left = ev.clientX - diameter / 2 + 'px';

  //Generamos un color aleatorio para el DIV
  circle.style.backgroundColor =
    'rgb(' +
    parseInt(Math.random() * 256) +
    ', ' +
    parseInt(Math.random() * 256) +
    ', ' +
    parseInt(Math.random() * 256) +
    ')';
  // Lo añadimos al elemento body de la web.
  document.body.appendChild(circle);
});
