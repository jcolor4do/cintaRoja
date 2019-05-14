// var nom=prompt('ingresa tu nombre');
// var edad= prompt('ingresa tu edad');
// var arr=[nom,edad]
// transformador(arr);

// function transformador(arr){
//     arr.forEach(element => {
//         console.log(element)
//         document.write(element)
//     });
// }


function contarParametros() {
    console.log('se pasaron: ' + arguments.length + ' argumentos');
    return arguments.length;
}

contarParametros(1,2,3,4);