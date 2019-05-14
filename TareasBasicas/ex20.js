// 20.- Escribe una función que imprima una
//      pirámide de astericos como la siguiente:

let imprimirPiramide = (n) => // n es el número de pisos de la pirámide 
{
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (let k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
        }
        console.log(str);
    }
}

imprimirPiramide(3);
