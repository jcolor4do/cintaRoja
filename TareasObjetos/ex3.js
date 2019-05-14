/* 10.- Crea un arreglo de objetos, donde cada objeto describa 
    un libro y tenga las propiedades para titulo(string),
    autor(string) y leido(booleano para indicar si se ha 
    leido o no). Itera sobre el arreglo de libros, y por 
    cada libro imprime el titulo y autor, junto con su 
    status de lectura (si ya ha sido leído, o no).
 */




const libro1 = {
    'titulo': 'libro1',
    'autor': 'autorLibro1',
    'leido': false
}


const libro2 = {
    'titulo': 'libro2',
    'autor': 'autorLibro2',
    'leido': true
}


const libro3 = {
    'titulo': 'libro3',
    'autor': 'autorLibro3',
    'leido': true
}

let arregloLibros = [libro1, libro2, libro3];
arregloLibros.forEach(element => {
    console.log("título: " + element.titulo);
    console.log("autor: "+element.autor);
    console.log("fue leído: "+element.leido)
});