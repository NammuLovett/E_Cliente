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
