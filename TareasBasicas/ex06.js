// 6.- Guardar en un array los 20 primeros
//     números pares
document.write('<h2>Numeros pares :: </h2>')
for (let index = 0; index < 41; index++) {
    if (index % 2 == 0) {
        document.write(index +", ");
    }
}