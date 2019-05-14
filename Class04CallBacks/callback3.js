// Crear una funcion de ordenSuperior que reciba como argumento dos numeros (a,b)
// y un callback. Según el callbacl qeue se pase a la funcion, se devuelve la suma de los dos numeros, la resta o la multiplicación



function ordSuperior(a, b) {
    console.log('sumar::'+sumar(a, b));
    console.log('restar::'+restar(a, b));
    console.log('dividir::'+dividir(a, b));
    console.log('muliplicar::'+multiplicar(a, b));
    
}

function sumar(a, b) {
    // ordSuperior(suma(a+b));
    return(a + b);
}
function restar(a, b) {
    return a - b;
}

function dividir(a,b){
    return a/b;
}

function multiplicar(a,b) {
    return a*b;
}



(ordSuperior(5, 5));