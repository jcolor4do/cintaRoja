// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia https://en.wikipedia.org/wiki/List_of_fictional_penguins.
// Crea un objeto llamado myPenguin con propiedades que representen la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)
const myPenguin = {
    nombre: "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    autor: "H. A. Rey and Margret Rey",
    notas: "Children's book about a travelling penguin"
}
console.log(myPenguin);
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//     de bienvenida. La salida debe ser algo como:
//     "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
console.log('Hola, soy un pingüino y mi nombre es: ' + myPenguin.nombre);
// 3.- Escribe otra línea de código que añada una nueva propiedad a tu 
//     pingüino llamada puedeVolar y asignalo a falso.
//     Nota: No modifiques el código original donde definiste a tu pingüino
myPenguin.puedeVolar = false;
/*4.- Añade un método a tu pingüino llamado 'graznar' que muestre en
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.*/
myPenguin.graznar = function () {
    console.log("kaww kaww!");
};
/*5.- Añade otro método a tu pingüino llamado 'saludar' que imprima en
    consola el mismo mensaje que escribimos para la bienvenida.
    Esta vez, emplea la palabra reservada "this" para resolverlo.*/
myPenguin.saludar = function () {
    console.log('holis, mi nombre es: ' + this.nombre);
};
/*6.- Sin modificar el código previo, cambia el nombre del pingüino a 
    "Señor Pingu" y llama al método "saludar" para verificar que 
    se ha aplicado el cambio correctamente.*/
myPenguin.saludar();
myPenguin.nombre = "nuevonombre u.u";
myPenguin.saludar();
/*7.- Escribe otro método llamado 'volar'. Con este método imprime en 
    consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true' 
    en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
    "No puedo volar :("*/
myPenguin.volar = function () {
    if (this.puedeVolar = true) {
        console.log('puedo volar!')
    } else {
        console.log('no puedo volar :c')
    }
};
/*8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
    llamar el método 'volar' para verificar que el cambio se efectuó
    correctamente.*/
myPenguin.puedeVolar = true;
myPenguin.volar();