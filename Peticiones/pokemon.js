const request = require('request');
const url= 'https://pokeapi.co/api/v2/pokemon/1'

request.get(url, (error, response, body) => {
    // responde 200 cuando es exitoso.
    if (response.statusCode == 200) {
        console.log('todo ok');
        console.log(body);
        // lo convierte de string a formato json.
        const cuerpo = JSON.parse(body);
        // console.log(cuerpo);
        console.log(cuerpo.types);
    } else {
        console.log('algo salió mal' + response.statusCode);
    }
});