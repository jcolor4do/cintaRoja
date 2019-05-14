/* ---------------------------------------------
7.- Hacer una funcion que calcule el tiempo
    necesario para que un automóvil que se
    mueve con una velocidad de 73000 m/h
    recorra una distancia de 120 km.
              (TIEMPO = d/v) */

function calculoVelocidad(distancia, tiempo) {
    
}

function calculoDistancia(params) {
    
}

function calculoTiempo(distanciaKM, velocidadMH) {
    var distancia=((distanciaKM*1000)/1);
    var velocidad=(velocidadMH/3600)*1
    return distancia/velocidad;
}

document.write('<h2>Ejercicio07<h2> resultado de la conversión:' +calculoTiempo(120,73000)+ ' segundos');