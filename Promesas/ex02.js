/*
----------------------------------------------------------------
    2.- Escribe una función que reciba como parámetro un ID
        para realizar una petición a la API para hallar un 
        autor con el ID especificado. La función debe retornar
        una promesa con la respuesta del servidor. 
----------------------------------------------------------------
*/
const request = require('../Peticiones/node_modules/request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function readAuthor(id) {
    const URI = `authors/${id}`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(URL_FINAL, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body),console.log(response))

                : reject(`404: El autor con id ${id} no existe.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}
 readAuthor('16')
     .then(autor=>console.log(autor))
     .catch(error =>console.log(error)) 



   

     
