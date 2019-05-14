// Utilizar la librería de la dependencia

const request = require('request');

// url
const url = 'https://swapi.co/api/people/1';

// request.patch
// request.put
// request.get
// request.post

request.get(url, (error, response, body) => {
    // responde 200 cuando es exitoso.
    if (response.statusCode == 200) {
        console.log('todo ok');
        console.log(body);
        // lo convierte de string a formato json.
        const cuerpo = JSON.parse(body);
        console.log(cuerpo);
        console.log(cuerpo.name);
    } else {
        console.log('algo salió mal' + response.statusCode);
    }


});