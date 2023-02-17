// Módulo Formas que contiene los métodos para crear círculos y cuadrados
const Formas = {
  crearCirculo: function (x, y) {
    const circulo = document.createElement('div');
    circulo.classList.add('circulo');
    circulo.style.left = x + 'px';
    circulo.style.top = y + 'px';
    const radio = Math.floor(Math.random() * 200) + 1;
    circulo.style.width = radio + 'px';
    circulo.style.height = radio + 'px';
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    circulo.style.backgroundColor = color;
    return circulo;
  },
  crearCuadrado: function (x, y) {
    const cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';
    const lado = Math.floor(Math.random() * 200) + 1;
    cuadrado.style.width = lado + 'px';
    cuadrado.style.height = lado + 'px';
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    cuadrado.style.backgroundColor = color;
    return cuadrado;
  },
};

// Evento para el ratón que crea formas (círculos o cuadrados) y los añade al contenedor
document.addEventListener('mousedown', function (event) {
  try {
    if (event.button == 0) {
      const formasContainer = document.getElementById('formas-container');
      const circulo = Formas.crearCirculo(event.clientX, event.clientY);
      formasContainer.appendChild(circulo);
    } else if (event.button == 2) {
      const formasContainer = document.getElementById('formas-container');
      const cuadrado = Formas.crearCuadrado(event.clientX, event.clientY);
      formasContainer.appendChild(cuadrado);
    } else {
      throw new Error('Interacción errónea');
    }
  } catch (error) {
    console.error(error.message);
  }
});
