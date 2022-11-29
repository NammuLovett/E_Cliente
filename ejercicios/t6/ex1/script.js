/**Ejercicio 1.- Mediante la propiedad innerHTML, muestra por pantalla la siguiente información: ¿están
las cookies activadas en el navegador? ¿y java? ¿Qué lenguaje usa? ¿está el navegador trabajando online?
Muestra además si nuestro navegador usa el motor Gecko, para ello deberás sacar la información del string
que devuelve la propiedad userAgent. */

document.getElementById(idEle).innerHTML = navigator.cookieEnabled;
document.getElementById(idEle).innerHTML = navigator.javaEnabled;
document.getElementById(idEle).innerHTML = navigator.language;
document.getElementById(idEle).innerHTML = navigator.onLine;
document.getElementById(idEle).innerHTML = navigator.userAgent;

console.log(navigator.cookieEnabled);
