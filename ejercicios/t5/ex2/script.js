/*
Ejercicio 2.- Ampliemos el ejemplo anterior con el constructor Coche:
o Funciones setters y getters para todas las propiedades. Las setters asignan un valor que le enviamos
como argumento, mientras que las getter devuelven el valor asignado.
o Modifica el método rellenarDepósito para que use uno de dichos métodos (setCantidad p.e.).
o Método muestraConf que muestre por consola y en un formato adecuado todas las propiedades
(por supuesto, usando los métodos creados).
o Crea un objeto a partir del constructor y prueba el funcionamiento del programa.
*/

/*---------------------------------------------------------------*/

function Coche(marca, combustible) {
  //Propiedades
  this.marca = marca;
  this.combustible = combustible;
  this.cantidad = 0;

  //métodos
  this.getMarca = function () {
    return this.marca;
  };
  this.setMarca = function (marca) {
    this.marca = marca;
  };

  this.getCombustible = function () {
    return this.combustible;
  };
  this.setCombustible = function (combustible) {
    this.combustible = combustible;
  };

  this.getCantidad = function () {
    return this.cantidad;
  };
  this.setCantidad = function (cantidad) {
    this.cantidad = cantidad;
  };

  this.rellenarDeposito = function (litros) {
    this.cantidad = litros;
  };

  this.muestraConf = function () {
    console.log(
      `marca: ${this.getMarca()}, tipo de combustible: ${this.getCombustible()}, litros del depósito: ${this.getCantidad()} }`
    );
  };
}

let cocheUno = new Coche('BMW', 'gasoil');
cocheUno.setCantidad(500);
cocheUno.muestraConf();
