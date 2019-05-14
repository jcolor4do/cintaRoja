
op=prompt('ingresa una opción');
switch (op) {
    case '1':
    var gradosCel =prompt('ingresa la cantidad de grados Celcius que desees convertir a grados Farenheit');
    document.write(gradosCel+' °C equivalen a: '+ celToFar(gradosCel)+ '°F');

                break;
case 2:
console.log('dashdajsd');
break;
    default:
    console.log('aaaa');
}


function celToFar(gradosCel) {
    var resp=Math.round(((gradosCel * 9/5) + 32));
    return resp;
}



