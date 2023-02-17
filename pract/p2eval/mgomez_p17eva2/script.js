// Módulo Formas que contiene los métodos para crear círculos y cuadrados

/* La primera parte del código define el módulo Formas que contiene dos métodos: 
crearCirculo y crearCuadrado. Ambos métodos reciben dos argumentos (x e y) que se utilizan para definir 
la posición de la forma en el contenedor. El método crearCirculo crea un elemento div que representa un círculo 
y le asigna un tamaño aleatorio y un color de fondo aleatorio. El método crearCuadrado hace lo mismo pero para un cuadrado. */
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

/* Añade un EventListener para el evento mousedown (cuando se presiona el botón del ratón). 
Dentro del evento, se verifica el botón que se ha presionado: si es el botón izquierdo (0), 
se crea un círculo llamando al método crearCirculo y se añade al contenedor con appendChild. 
Si es el botón derecho (2), se crea un cuadrado llamando al método crearCuadrado y se añade al contenedor. 
Si se presiona cualquier otro botón, se lanza una excepción y se registra un mensaje de error en la consola. 
En ambos casos se utiliza el objeto event para obtener las coordenadas (clientX y clientY) del puntero del ratón y pasarlas como argumentos a los métodos crearCirculo y crearCuadrado. */

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
