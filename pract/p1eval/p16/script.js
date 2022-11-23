/* Vamos a suponer una aplicación de compras online a cuyo servidor solicitamos
información sobre aquellos productos que tengo reservados. Específicamente queremos
saber si dichos productos llegan a un cierto destino postal. Ante nuestra petición
recibimos la siguiente cadena JSON con la información solicitada:

Se pide transformarlo a una estructura Map y mostrar en formato tabla la información
de los productos solicitados.

*/

//JSON de pedido
const pedido = `{"idPedido":"faa-8444","pedidos":[{"idProducto":"info005","nombre":"Placa_Arduino_one","destinoPostal":"abarcable"},{"idProducto":"info041","nombre":"Placa_Raspberry_3","destinoPostal":"No abarcable"},{"idProducto":"gadget024","nombre":"usb_Multi_5puertos","destinoPostal":"abarcable"}]}`;

//Paso JSON > Obj > array > map
//parse -> obj
//entries -> separar en arrays
//map transforma en map
const map = new Map(Object.entries(JSON.parse(pedido)));

//document print
document.write('<p><strong>idpedido: ' + map.get('idPedido') + '<strong></p>');

document.write('<table>');
document.write('<tr>');

//Cabecera
document.write('<th>Producto</th>');
document.write('<th>Nombre</th>');
document.write('<th>Destino</th>');
document.write('<th>Abarcabilidad</th>');
document.write('</tr>');

//iteración del map
for (let i = 0; i < map.get('pedidos').length; i++) {
  document.write('<tr>');
  document.write(`<td class="productos">Producto ${i}</td>`);
  document.write(`<td>${map.get('pedidos')[i].idProducto}</td>`);
  document.write(`<td>${map.get('pedidos')[i].nombre}</td>`);
  document.write(`<td>${map.get('pedidos')[i].destinoPostal}</td>`);
  document.write('</tr>');
}
document.write('</table>');
