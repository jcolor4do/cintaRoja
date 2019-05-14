class Animal {
    constructor(piernas, cerebro) {
        this.piernas = piernas;
        this.cerebro = cerebro;
    }
    respirar() {
        return 'respirando...';
    }
}

class Humano extends Animal {
    constructor(piernas, cerebro, pulgares) {
        super(piernas, cerebro);
        this.pulgares = pulgares;
    }
    hablar() {
        return 'bla, bla bla';
    }
}

class Estudiante extends Humano {
    constructor(matricula, piernas, cerebro, pulgares) {
        super(piernas, cerebro, pulgares);
        this.matricula = matricula;

    }
   reprobar(){
       return 'reprobé :(';
   }
}

const Jacqueline = new Estudiante("201505","2","1","4")
console.log(Jacqueline.cerebro)//Animal
console.log(Jacqueline.pulgares) //Humano
console.log(Jacqueline.hablar())
console.log(Jacqueline.reprobar())//estudiante