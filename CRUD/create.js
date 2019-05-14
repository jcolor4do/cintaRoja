const request = require('request');
const urlBase = "https://goodreads-devf-aaron.herokuapp.com/api/v1/";

//Lee todos los autores

const getAllAutores = () => {
    const url = 'authors/';
    return new Promise((resolve, reject) => {
        request.get(`${urlBase}${url}`, (error, response, body) => {
            const json = JSON.parse(body)

            response.statusCode === 200
                ? resolve(json)
                : reject(error)
        });
    });
}
// getAllAutores().then(autors => console.log(autors)).catch(err => console.log(err))

// Lee un solo autor, busca por id.
const findAutorById = (id) => {
    const url = 'authors/';
    return new Promise((resolve, reject) => {
        request.get(`${urlBase}${url}${id}`, (error, response, body) => {
            const json = JSON.parse(body)

            response.statusCode === 200
                ? resolve(json)
                : reject(error)
        });
    });

}

// findAutorById(2592).then(autors => console.log(autors)).catch(err => console.log(err))



// myFirstCreate

const crearAutor = (nombre, apellidos, biografia, genero, edad) => {
    const url = 'authors/';
    const enviarAutor = {
        name: nombre,
        last_name: apellidos,
        biography: biografia,
        gender: genero,
        nacionalidad: 'MX',
        is_alive: true,
        age: edad
    }

    const URL_Completa = `${urlBase}${url}`
    return new Promise((resolve, reject) => {
        request.post({ url: URL_Completa, form: enviarAutor }, (error, response, body) => {
            //created code =201
            const json = JSON.parse(body);
            console.log("::CÓDIGO DE RESPUESTA::" + response.statusCode)
            response.statusCode === 201
                ? resolve(json)
                : reject(error);
        })
    })
}

// crearAutor('Yaki', 'Sieras', 'cacaculopedopis', 'F', 20).then(registroCreado => console.log(registroCreado)).catch(err => console.log(err))

// 2592

const updateAutor = (id, nombre, apellidos, biografia, genero, edad) => {
    const url = 'authors/';
    const actualizarDatos = {
        name: nombre,
        last_name: apellidos,
        biography: biografia,
        gender: genero,
        nacionalidad: 'MX',
        is_alive: false,
        age: edad
    }
    const URL_Completa = `${urlBase}${url}${id}/`
    return new Promise((reject, resolve) => {
        request.put({ url: URL_Completa, form: actualizarDatos }, (error, response, body) => {
            const json = JSON.parse(body);
            console.log("::CÓDIGO DE RESPUESTA::" + response.statusCode)
            response.statusCode === 200
                ? resolve(body)
                : reject(error);
        });
    });
}

// updateAutor(2594, 'Yaki', 'Sieras', 'di que eres popó', 'F', 20).then(updated => console.log(updated)).catch(err => console.log(err));

// 2500
const deleteAutor = (id) => {
    const url = 'authors/';
    const URL_Completa = `${urlBase}${url}${id}/`
    return new Promise((reject, resolve) => {
        request.delete(URL_Completa, (error, response, body) => {

            console.log("::CÓDIGO DE RESPUESTA::" + response.statusCode)
            response.statusCode === 204
                ? resolve(response.statusCode)
                : reject(error);
        });
    });
}
deleteAutor(2502).then(borrado => console.log(borrado), err => console.log(err));
