/*
----------------------------------------------------------------
2.- Hacer una funcion que haga una peticion 
    (Ejemplo: peticionLibro("i robot");
    Buscar un libro y traer el o los autores del primer libro
    
        http://openlibrary.org/search.json?q=i+robot) 
----------------------------------------------------------------
*/
const request = require('../Peticiones/node_modules/request')
const url = 'http://openlibrary.org/search.json?q=i+robot'

function findLibrito() {
    return new Promise(( resolve, reject) => {
        request.get(url, (error,response,body) => {
            const asd =JSON.parse(body);
                response.statusCode == 200
                ? resolve(console.log(response.statusCode), 
                console.log(asd.docs[0].author_name.forEach(element=>{
                    console.log(element)
                }))) 

                // array.forEach(element => {
                    
                // });
                : reject(error)
        });
    }
    );
}
findLibrito()
    .then(constanteBuena => console.log(constanteBuena))
    .catch(casoMalo => console.log(console.log(casoMalo)));



