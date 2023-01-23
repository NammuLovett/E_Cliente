//Recogemos la etiqueta HTML
let html = document.getElementsByTagName('html')[0];

//Llamamos a la función recorre que se encarga de recorrer todos los elementos del html a partir del indicado por parámetro
recorre(html);

function recorre(elemento) {
  //Recorremos todos los hijos
  for (let i = 0; i < elemento.children.length; i++) {
    //Almacenamos los hijos en una variable
    let hijo = elemento.children[i];

    //Recorremos los hijos de los hijos
    recorre(hijo);

    //En caso de que tenga atributos, los mostramos; en caso de que no, mostramos solo el nombre de la etiqueta
    if (hijo.hasAttributes()) {
      //Recogemos el nombre de los atributos de la etiqueta
      for (let nombre of hijo.getAttributeNames()) {
        //Recogemos el valor a partir del nombre
        //nombre -> id | valor -> 1 POR EJEMPLO
        let valor = hijo.getAttribute(nombre);
        console.log(hijo.nodeName, '=>', nombre, ' ', valor);
      }
    } else {
      console.log(hijo.nodeName);
    }
  }
}
