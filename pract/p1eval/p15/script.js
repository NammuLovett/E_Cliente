/* Se pide representar un objeto Portátil que herede propiedades y métodos de un
objeto general Ordenador.

Lo probamos en el mismo programa con llamadas a console.log().

Portatil hereda de Ordenador .
✓ Necesario que haya comentarios de todas las operaciones realizadas.
✓ Al aplicar herencia lo haremos de un modo más práctico usando la sentencia
this.__proto__ = new Ordenador (marca, modelo, ram, disco, pulgadas);
dentro del constructor de Portatil para indicar que cualquier objeto instanciado con
este constructor va a heredar de Ordenador. (Ver ejemplo pag.24 apuntesT5)


Propiedades:
1. Marca. Un texto.
2. Modelo. Un texto
3. Memoria RAM. Un número que indica GB de capacidad.
4. Capacidad de Disco Duro. Un número que indica GB de capacidad.
5. Pulgadas de pantalla, un número que indica Pulgadas.
6. Autonomía (solo en portátiles). Un número que indica horas de duración de la
batería.
✓ Métodos:
o toString. Sirve para obtener en forma de texto y con un formato de salida
adecuado los detalles del ordenador y/o del portátil.


Creamos dos objetos del constructor Ordenador, con y sin todos los parámetros.
Por defecto (sin ser obligado indicarlos) se toman como valores 17 pulgadas, 512
GB de disco duro y 4 GB de RAM. La marca y el modelo sí son necesarias de
indicar.
➢ Creamos dos objetos del constructor Portatil, con y sin todos los parámetros. En
este caso también incluimos la autonomía (por defecto, 4 horas). Además, y también
por defecto, en los portátiles las pulgadas son 13 y el disco duro 256 GB.


➢ Resumen (llamada a toString()) de cada uno de los 4 objetos implementados y
salida por consola.

*/

// Clase Pral
function Ordenador(marca, modelo, ram = 4, capacidad = 512, pulgadas = 17) {
  this.marca = marca;
  this.modelo = modelo;
  this.ram = ram;
  this.capacidad = capacidad;
  this.pulgadas = pulgadas;

  this.toString = () => {
    let toString = '';
    for (let i in this) {
      if (typeof this[i] != 'function') {
        toString += `${i}: ${this[i]}, `;
      }
    }
    return toString;
  };
}

// Clase Heredada
function Portatil(
  marca,
  modelo,
  ram = 4,
  capacidad = 512,
  pulgadas = 17,
  autonomia = 6
) {
  // Herencia
  this.prototype = new Ordenador(marca, modelo, ram, capacidad, pulgadas);
  this.autonomia = autonomia;

  this.toString = () => {
    let toString = '';
    for (let i in this) {
      if (typeof this[i] != 'function') {
        toString += `${i}: ${this[i]}, `;
      }
    }
    return toString;
  };
}

let pc1 = new Ordenador('dell', 'Oblivion');
let pc2 = new Ordenador('benQ', 'luxe', 64, 2048, 100);

let portatil1 = new Portatil('mac', 'PRO');
let portatil2 = new Portatil('razorblade', 'Xpert', 50, 512, 50, 100);

console.log(pc1.toString());
console.log(pc2.toString());
console.log(portatil1.toString());
console.log(portatil2.toString());
