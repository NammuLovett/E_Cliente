// Declarar la función sexlocker

let regex = /[s|S][e|E][x|X][o|O]/g; // regex para buscar las palabras que coincidan mayúscula o minúscula

function sexLocker(root) {
  root.innerHTML = root.innerHTML.replaceAll(
    regex,
    '<span style="color:darkred; background-color:pink;">Contenido XXX bloqueado,</span>'
  );
  // Reemplaza todas las ocurrencias de 'sexo' presentes en el body del documento por un span de contenido bloqueado con estilo css.
}

let body = document.getElementsByTagName('body')[0]; // Selecciona el body del dom.
sexLocker(body);
