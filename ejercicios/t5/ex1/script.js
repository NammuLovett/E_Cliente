/* Primer objeto. De modo que prefieras, crea el siguiente objeto:
Crea un objeto meteorito. Tendrá los siguientes atributos o propiedades:
o X → coordenada en el espacio x con valor inicial 0
o Y → coordenada en el espacio y con valor inicial 0
o VelGiro → Velocidad de rotación. Valor inicial 0.
o VelDesp → Velocidad de desplazamiento. Valor inicial 0.
o Crea método muestraConf() que saque por consola todas las propiedades en un formato adecuado.
Comprueba el resultado por consola llamando a los métodos del objeto meteorito./*  */
/* 
let meteorito = {
  x: 0,
  y: 0,
  velGiro: 0,
  velDesp: 0,
  mostrarCoordenadas: function () {
    return `(Valor x - ${this.x}, Valor y - ${this.y}, Valor velGiro - ${this.velGiro}, Valor velDesp -  ${this.velDesp})`;
  },
};

console.log(meteorito.mostrarCoordenadas());
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
    return this.marca;
  };
  this.setCombustible = function (combustible) {
    this.marca = combustible;
  };

  this.getCantidad = function () {
    return this.marca;
  };
  this.setCantidad = function (cantidad) {
    this.marca = marca;
  };

  this.rellenarDeposito = function (litros) {
    this.cantidad = litros;
  };

  this.muestraConf = function () {
    console.log(
      `marca: ${this.getMarca()}, tipo de combustible ${this.combustible()},litros del depósito: ${this.getCantidad()} }`
    );
  };
}

let cocheUno = new Coche('BMW', 'gasoil');
cocheUno.muestraConf;

console.log();
