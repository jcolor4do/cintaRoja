/* 1. Hacer superclase Maestro y subclases Maestro de Física y
  Maestro de Música y a cada uno asignarle su materia y
  calcular su promedio de grupo a partir de calificaciones
  (puedes usar arreglos). El maestro de física tiene un
  atributo "antiguedad" que guarda un valor numerico,
  mientras que el maestro de música tiene un atributo "edad"
  también guardando un valor numérico. */
let sum = 0
class Maestro {
    constructor(materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    }
    calcularProm() {
        let suma = 0;

        for (let index = 0; index < this.calificaciones.lenght; index++) {
            suma = suma + calificaciones;
        }
        return suma / this.calificaciones.lenght;
    }
}


class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(calificaciones, materia);
        // en super se ponen los atributos de la clase padre.
        this.antiguedad = antiguedad;
    }
}


class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones)
        this.edad = edad;
    }
}


const profesor1 = new Maestro('maestrito', [6, 6, 6, 6, 6]);
const profesor2 = new MaestroFisica('maestro física', [5, 5, 5, 5, 5, 5], '100');
const profesor3 = new MaestroMusica('maestro', [6, 7, 8, 9, 10], '200');

console.log('aaaaa ' + profesor1);
console.log('bbbbb' + profesor2);
console.log('ccccc' + profesor3);