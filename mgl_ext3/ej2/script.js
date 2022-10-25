let userString = 'yo hago yoga hoy';

function esPalindromo(userString) {
  userString = userString.replace(/\s/g, ''); //quitar los espacios a la cadena
  userString = userString.toLowerCase(userString); //paso todos los caracteres a minúscula
  //recibe variable (array en este caso)
  capicua = true;
  let j = userString.length - 1; //almacena el tamaño del array -1 para indicar la última posición

  for (let i = 0; i < userString.length / 2 - 1; i++) {
    if (userString[i] != userString[j]) {
      capicua = false;
    }
    j--;
  }
  return capicua;
}

alert(esPalindromo(userString));
