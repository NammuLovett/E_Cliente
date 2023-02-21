// Función que maneja la respuesta de una petición HTTP y devuelve la respuesta como JSON
function handleResponse(response) {
  // Si la respuesta no es válida, lanzar un error con el mensaje de estado de la respuesta
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // Devolver la respuesta como JSON
  return response.json();
}

// Esta función realiza una solicitud HTTP a la URL especificada y devuelve los datos como un objeto JSON
function fetchJsonData() {
  return fetch('http://jsonplaceholder.typicode.com/posts') // Realizar una solicitud HTTP
    .then(handleResponse) // Procesar la respuesta con la función handleResponse()
    .then((jsonData) => {
      console.log('JSON data:', jsonData); // Imprimir los datos en la consola
      return Object.entries(jsonData); // Convertir los datos JSON en un array de pares clave-valor
    });
}

// Esta función actualiza el formulario con los datos del elemento en la posición num del array de datos
function updateForm(num, data) {
  document.getElementById('usuarioId').value = data[num][1].userId;
  document.getElementById('id').value = data[num][1].id;
  document.getElementById('titulo').value = data[num][1].title;
  document.getElementById('cuerpo').value = data[num][1].body;
}

// Esta función se ejecuta cuando el DOM se ha cargado
document.addEventListener('DOMContentLoaded', () => {
  let dataArray = [];

  // Obtener los datos JSON y actualizar el formulario con el primer elemento
  fetchJsonData()
    .then((data) => {
      dataArray = data; // Almacenar los datos en un array para usarlos más adelante
      updateForm(0, dataArray); // Actualizar el formulario con los datos del primer elemento
    })
    .catch((error) => console.error(error)); // Manejar errores y mostrarlos en la consola

  let currentIndex = 0;
  const formElement = document.getElementById('formulario');
  formElement.addEventListener('submit', (ev) => ev.preventDefault()); // Evitar que se envíe el formulario al presionar el botón Enter

  const backButton = document.getElementById('anterior');
  backButton.addEventListener('click', () => {
    // Actualizar el índice del elemento seleccionado y actualizar el formulario con los datos del nuevo elemento
    if (currentIndex === 0) {
      currentIndex = dataArray.length - 1;
    } else {
      currentIndex--;
    }
    updateForm(currentIndex, dataArray);
  });

  const nextButton = document.getElementById('siguiente');
  nextButton.addEventListener('click', () => {
    // Actualizar el índice del elemento seleccionado y actualizar el formulario con los datos del nuevo elemento
    if (currentIndex === dataArray.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateForm(currentIndex, dataArray);
  });
});
