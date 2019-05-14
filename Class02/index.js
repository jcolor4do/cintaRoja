var prueba = "algo aqui";
document.write(prueba);


// for (let i = 0; i< 10; i++) {
//     document.write('hola'+i)
    
// }


let i=0;
// while (i < 10) {
//     console.log('sss'+i)
//    i= i+1;
//   }

 while (i< 10) {
     
     console.log('sssss'+i)
     i=i+1;
 }


//  Listas

const lista=[];
let lista2=[1,2,3,4,5, "seis","siete"];


console.log(lista2[0]+1);

// convertir de un numero 
console.log(lista2[0]+lista2[1]+1);
console.log(parseInt(lista2[0]));

// agrega un nuevo elemento (en la última posición del arreglo)
lista.push('ooooo');
lista.push('12345789');
console.log(lista);
lista[3]=55
console.log(lista);


// recorrer una lista

for (let a = 0; a < lista2.length; a++) {
    const element = lista2[a];
    console.log(element)
}


// o

lista.forEach(element => {
    console.log(element)
});


let x=0;
do {
    document.write('soy'+x);
    x=x+1;
} while (x<5);


function printName(name) {
    document.write('me llamo;', name);
    return name.toUpperCase();
}

var elNombre= printName('Jacqueline');
console.info(elNombre);


function transformador(arr){
    arr.forEach(element => {
        console.log(element)
    });
}

var nom=prompt('ingresa tu nombre');
var edad= prompt('ingresa tu edad');
var arr=[nom,edad]
transformador(arr);



// OTRA FORMA DE  HACER FUNCIONES O MÉTODOS
// función anínima:
// sirve para: 
var myFunction= function(){
    return 'function anónima';
}
// en ecma6 Arrow function

var funcion=()=>{
    return 'aaadaddd';
}



console.log(myFunction());
console.log(funcion());