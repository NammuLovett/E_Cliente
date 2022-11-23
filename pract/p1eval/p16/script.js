/* Vamos a suponer una aplicación de compras online a cuyo servidor solicitamos
información sobre aquellos productos que tengo reservados. Específicamente queremos
saber si dichos productos llegan a un cierto destino postal. Ante nuestra petición
recibimos la siguiente cadena JSON con la información solicitada:

Se pide transformarlo a una estructura Map y mostrar en formato tabla la información
de los productos solicitados.

*/
let miJSON = {
  idPedido: 'faa-8444',
  pedidos: [
    {
      idProducto: 'info005',
      nombre: 'Placa_Arduino_one',
      destinoPostal: 'abarcable',
    },
    {
      idProducto: 'info041',
      nombre: 'PPlaca_Raspberry_3',
      destinoPostal: 'No abarcable',
    },
    {
      idProducto: 'gadget024',
      nombre: 'usb_Multi_5puertos',
      destinoPostal: 'abarcable',
    },
  ],
};
