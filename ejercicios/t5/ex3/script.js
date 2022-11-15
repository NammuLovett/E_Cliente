/*
Ejercicio 3.- Sigamos ampliando. Añade el código para crear un array con tantos objetos Coche como
quiera el usuario. Funcionará así:
o Creamos un objeto Coche.
o Le pedimos al usuario los datos.
o Con estos datos completamos el objeto.
o Lo introducimos en un array.
o Preguntamos al usuario si quiere seguir introduciendo datos.
o De no ser así mostraremos el resultado
Muestra los resultados por consola. Y ya que estamos... mediante una tabla por pantalla.
 */

/*---------------------------------------------------------------*/
function Coche(marca, combustible) {
  this.marca = marca;
  this.combustible = combustible;
  this.cantidad = 0;

  this.setMarca = function (marca) {
    this.marca = marca;
  };
  this.getMarca = function () {
    return this.marca;
  };

  this.setCombustible = function (combustible) {
    this.combustible = combustible;
  };
  this.getCombustible = function () {
    return this.combustible;
  };

  this.setCantidad = function (cantidad) {
    this.cantidad = cantidad;
  };
  this.getCantidad = function () {
    return this.cantidad;
  };

  this.rellenarDeposito = function (litros) {
    this.setCantidad(litros);
  };

  this.muestraConf = function () {
    return `Coche: \nMarca --> ${this.getMarca()} \nCombustible --> ${this.getCombustible()} \nCantidad --> ${this.getCantidad()}`;
  };
}

let seguir = true;
let coches = [];

do {
  let miCoche = new Coche();

  miCoche.setMarca(prompt('Introduzca la marca:'));
  miCoche.setCombustible(prompt('Introduzca el combustible:'));

  coches.push(miCoche);

  seguir = confirm('¿Desea seguir?');
} while (seguir == true);

for (let coche of coches) {
  alert(coche.muestraConf());
}
