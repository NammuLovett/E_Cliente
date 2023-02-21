function fetchJsonData() {
  // Realizar petición HTTP a la URL y devolver los datos como JSON
  return fetch('http://jsonplaceholder.typicode.com/posts')
    .then(handleResponse)
    .then((jsonData) => Object.entries(JSON.parse(JSON.stringify(jsonData))));
}

function updateForm(num, data) {
  // Actualizar el contenido del formulario con los datos del elemento en la posición num del array
  document.getElementById('usuarioId').value = data[num][1].userId;
  document.getElementById('id').value = data[num][1].id;
  document.getElementById('titulo').value = data[num][1].title;
  document.getElementById('cuerpo').value = data[num][1].body;
}

// Función que se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  let dataArray = [];

  // Obtener datos JSON y actualizar formulario con el primer elemento
  fetchJsonData()
    .then((data) => {
      dataArray = data;
      updateForm(0, dataArray);
    })
    .catch((error) => console.error(error));

  let currentIndex = 0;
  const formElement = document.getElementById('formulario');
  formElement.addEventListener('submit', (ev) => ev.preventDefault());

  const backButton = document.getElementById('anterior');
  backButton.addEventListener('click', () => {
    // Actualizar índice del elemento seleccionado y actualizar formulario con los datos del nuevo elemento
    if (currentIndex === 0) {
      currentIndex = dataArray.length - 1;
    } else {
      currentIndex--;
    }
    updateForm(currentIndex, dataArray);
  });

  const nextButton = document.getElementById('siguiente');
  nextButton.addEventListener('click', () => {
    // Actualizar índice del elemento seleccionado y actualizar formulario con los datos del nuevo elemento
    if (currentIndex === dataArray.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateForm(currentIndex, dataArray);
  });
});
