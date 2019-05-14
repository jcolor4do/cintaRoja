// Crear una funcion de orden superior que reciba como arg un mensaje y callback.
// Según el callback que se pase como arg, la funcion de orden superior debe mostrar el mensaje en console.warn


function ordenSuperior(mensaje) {
    mensaje('hola');
}

ordenSuperior(function(msg){
console.warn(msg)
document.write(msg);
});