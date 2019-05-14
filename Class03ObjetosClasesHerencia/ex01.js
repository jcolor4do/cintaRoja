/* 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
    https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...) */



const myPenguin = {
    nombre: "Tacky",
    origin: "tacky the penguin",
    author: "Helen Lester",
    description: "A penguin who does things differently than other penguins",
    
    sayName: () => {
        console.log("hola, mi nombre es: " + myPenguin.nombre);
    },

    puedeVolar: () => {
        myPenguin.vuela = false;
        console.log('mi pinguino puede volar? '+myPenguin.vuela)
    }
}


myPenguin.sayName();
myPenguin.puedeVolar();
console.log(myPenguin)