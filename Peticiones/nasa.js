

const request = require('request');
const url = 'https://api.nasa.gov/planetary/apod?api_key=l0tDiwXML70dpbFx8LJwAWKnUpVqY6cZZOhZ7o36';





request.get(url, (error, response, body) => {
    if (response.statusCode == 200) {
        console.log('bien');
        const cuerpiyo = JSON.parse(body)
        console.log(cuerpiyo);
        console.log('************');
        console.log(body);
    }
    if (error!=200) {
        console.log(response.statusCode)
    }
});
