/*
----------------------------------------------------------------
    Escribe el código del CRUD de la siguiente API genérica:
        https://goodreads-devf-aaron.herokuapp.com/docs/ 
    1.- Escribe una función que reciba como parámetros nombre,
        nacionalidad, biografía, género y edad para hacer una
        petición a la API para crear un autor nuevo. 
        La función debe retornar el autor nuevo en una promesa. 
----------------------------------------------------------------
*/



const request = require('request');
function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        req.onload = function() {
          if (req.status == 200) {
            resolve(JSON.parse(req.response));
          }
          else {
            reject();
          }
        };

        req.send();
    })
}

