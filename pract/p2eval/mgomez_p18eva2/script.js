// Leer el archivo JSON
fetch('datos.json')
  .then((response) => response.json()) // Convertir el archivo JSON en un objeto JavaScript
  .then((datos) => {
    const formulario = document.getElementById('formulario'); // Obtener el elemento del formulario

    // Construir los elementos del formulario
    for (const key in datos) {
      // Iterar a través de las claves del objeto JavaScript
      if (Object.hasOwnProperty.call(datos, key)) {
        // Verificar si la clave pertenece al objeto
        const label = document.createElement('label'); // Crear un elemento label
        label.innerText = key; // Agregar el texto de la clave al label
        formulario.appendChild(label); // Agregar el label al formulario

        const input = document.createElement('input'); // Crear un elemento input
        input.type = 'text'; // Establecer el tipo de input a texto
        input.name = key; // Establecer el nombre del input como la clave del objeto
        input.value = datos[key]; // Establecer el valor del input como el valor de la clave del objeto
        formulario.appendChild(input); // Agregar el input al formulario
      }
    }
  })
  .catch((error) => console.error(error)); // Manejar cualquier error que se produzca durante la lectura del archivo JSON
