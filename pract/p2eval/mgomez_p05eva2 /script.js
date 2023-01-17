// Muestra la estructura en árbol de la página.
function mostrarArbol(root) {
  console.log(`Elemento ${root.nodeName}`); // Muestra el nombre del elemento actual.

  // Si el elemento posee atributos, se itera mostrando su nombre y valor.
  if (root.attributes.length > 0) {
    console.log(`Atributos de ${root.nodeName}: `);
    for (let atr of root.attributes) {
      console.log(`${atr.name} -> ${atr.value}`);
    }
  }
  // Si el elemento posee childs, se nombran y muestra su información
  if (root.children.length > 0) {
    console.log(`Hijos de ${root.nodeName} : `);
    // Primero muestra todos los hijos.
    for (let child of root.children) {
      console.log(child.nodeName);
    }
    console.log(' ');
    // Información de cada child
    for (let child of root.children) {
      mostrarArbol(child);
      console.log(' ');
    }
  }
}

let html = document.getElementsByTagName('html')[0]; // De donde parte para ir mostrando la info.

//Function
mostrarArbol(html);
