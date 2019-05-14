// Muestra un mensaje en consola mediante callback

function verMensaje(msg) {
    msg()
}

function msg(){

    console.log('sssss');
}

verMensaje(msg)

//console.log(1);
// function name(params) {

// }

// function mostrarMensajes(arg) {
//     console.log(arg);
// }



// function llamada1(saludo,num) {
//     saludo();
//     muestra(num);
    
// }

// llamada1(function () {
//     console.log('saludo');
// },4);  // "hola Pepe"

// function muestra (num) {
//     let triple = num *3
// }
function operaciones(num1,num2){
    multi(num1,num2);
    resta(num1,num2);
    suma(num1,num2);
}

function multi1(num1,num2){
    let resultMulti = num1*num2
    console.log(resultMulti);
    
}
function resta1(num1,num2){
    let resultResta = num1-num2
    console.log(resultResta);
    
}
function suma1(num1,num2){
    let resultSuma = num1+num2
    console.log(resultSuma);
    
}

function lolo(num1,num2){
    let triple=num1*3+num2
    console.log(triple);
    
}

operaciones(lolo,resta1,suma1,5,5)