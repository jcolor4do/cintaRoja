// 11.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo

class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    generarRFC() {
        this.rfc = (this.nombre + String(this.edad) + this.sexo);
    }

}

let mauricio = new Persona("Mauricio", 30, "H", 73.5, 1.75);
console.log(mauricio)
console.log(mauricio.esMayorDeEdad());
console.log(mauricio.calcularIMC());
console.log(mauricio.generarRFC())