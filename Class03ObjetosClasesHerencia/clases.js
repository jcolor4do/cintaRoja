class Carros {
    constructor(marca, color, motor, modelo) {
        // la palabra this hace referencia a la clase carros
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.motor = motor;
    }

    arrancar() { return 'rhhh rhhhh...'; }

    getMarca() {return this.marca; }

    setMarca(marca) {
        if (marca === 'ford') {this.marca = marca;
        return 'nueva marca adquirida:'+marca }
    }
}


const bocho = new Carros('bocho', 'rojo', 'V8', '60')
const enzo = new Carros('ferrari', 'rojo', 'V10', '68')

console.log(bocho.color);
console.log(enzo.color);
console.log(bocho.arrancar());
console.log(bocho.getMarca());
console.log(bocho.setMarca('ford'));
console.log(bocho);