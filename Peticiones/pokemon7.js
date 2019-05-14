/* 7.- Traer los primeros 151 pokemon de la primera generacion y
   devolver un objeto con el nombre, sus moves, tipos, tamaño
   y peso. */


const request = require('request')

const consultaPokemon = () => {
    for (let index = 1; index < 11; index++) {
        request.get(`https://pokeapi.co/api/v2/pokemon/${i}`, (err, response, body) => { 
            if (response.statusCode === 200) {
                const poke = JSON.parse(body);
                const nombre= body.name
                console.log('nombre '+index+ ' : '+nombre)
            }
            else {
                console.log('error' + err + body.statusCode);
            }
        
        })

    }

}

consultaPokemon();