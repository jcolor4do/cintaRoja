/* 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
                   https://pokeapi.co/

2.- Hacer una funcion que haga una peticion
   (Ejemplo: peticionLibro(“i robot”);
   Buscar un libro y traer el o los autores del primer libro

       http://openlibrary.org/search.json?q=i+robot) */

const request = require('request')

const url = 'http://openlibrary.org/search.json?q=i+robot';
// const nombre = nombre.replace(' ', '+');
const peticionLibro = (nombre) => {
    request.get(`http://openlibrary.org/search.json?q=${nombre}`,
        (err, response, body) => {
            if (response.statusCode === 200) {
                const books = JSON.parse(body);//all books
                //console.log(books);
                const primero = books.docs[0] //first book
                //console.log(primero)
                const autoresTodos= primero.author_name; //regresa un arreglo de autores.

                autoresTodos.forEach(element => {
                    console.log(element)
                });
                
// es lo mismo que lo siguiente**++******+++**++
                primero.author_name.map((autor)=>{
                    console.log(autor)
                })

            }
            else {
                console.log('error' + err + body.statusCode);
            }
        });
}

peticionLibro("i robot");