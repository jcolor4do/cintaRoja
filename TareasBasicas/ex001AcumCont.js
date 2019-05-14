// contadores: son variables que almacenan el conteo (ej. conteo de ingreso de datos)
// acumuladores: son variables que acumulan información (acumulado total= suma de todas las cantidades.)
let contador = 0;
let acumulador = 0;
let costo = 0;
let continuar = 0;
while (continuar == 0) {
    costo = prompt('ingrese el consto del artículo:');
    // costo total de los artículos:
    contador = contador + 1;
    // cantidad de artículos
    acumulador = acumulador + parseInt(costo);
    continuar = prompt('¿desea continuar? 0=si, 1=no')
}
console.log('la cantidad de artículos ingresados es:' + contador);
console.log('el costo total de artúculos es: ' + acumulador)