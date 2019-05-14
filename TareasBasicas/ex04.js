var arrayNum = [1, 2, 3, 4, 5, 6]
var suma = 0;
function recorrer(arrayNum) {
    for (var i = 0; i <= arrayNum.length; i++) {
        // const element = arrayNum[i];
        // console.log(element + '::' + i)
        suma = suma + arrayNum[i];
        // console.log(suma);
        
    }
    var promedio = (suma / arrayNum.length);
    return promedio;
}
document.write("Tarea 4 :: Suma de numeros con resultado promedio  ----> "+recorrer(arrayNum));



let mitad=arrayNum.length/2;
mitad=Math.round()

console.log("la mediana"+ arr[mitad]);


