/*
Ejercicio 5.- Herencia con constructores
Define un tipo de objeto Cometa cuyas propiedades de instancia (específicas de cada objeto) sean diametro, temperatura y nombre. La temperatura será un valor numérico que suponemos está en grados centígrados.

Como propiedad común a todos los objetos usaremos def (que contendrá la definición de cometa según el diccionario) y como métodos comunes getRadio() (que debe devolver el radio) y getTemp() (que debe devolver el valor de temperatura expresado en grados Farenheit). Para la conversión de centígrados a Farenheit podrás seguir la fórmula: oF = (oC · 1,8) + 32 Crea tres objetos de tipo cometa y comprueba que puedes acceder tanto a las propiedades específicas como a las propiedades y métodos comunes desde cada objeto.

 */

/*---------------------------------------------------------------*/

function Cometa(diametro, temperatura, nombre) {
  this.diametro = diametro;
  this.temperatura = temperatura;
  this.nombre = nombre;
  this.def = 'Roquita de marte';

  this.setNum = function (num) {
    this.num = num;
  };
  this.getNum = function () {
    return this.num;
  };

function Asteroide (diametro, temperatura, nombre)
this.__proto__ = new Cometa(10,22,"pepito");

function Roquita (diametro, temperatura, nombre)
// meteo1(15, 43, "c18") = Object.create(Cometa);
this.__proto__=new Cometa (20,26,"meteo1");
}
