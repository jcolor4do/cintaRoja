const request = require('request');
const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=l0tDiwXML70dpbFx8LJwAWKnUpVqY6cZZOhZ7o36';



request.get(url, (error, response, body) => {
    if (response.statusCode == 200) {
        console.log('bien');
        const cuerpiyo = JSON.parse(body)
        // console.log(cuerpiyo);
        console.log('************');
        // console.log(body);
        // console.log(cuerpiyo.near_earth_objects)
        Object.keys(cuerpiyo.near_earth_objects).forEach(function (key, index) {
            console.log(keys.forEach);
        });

    }
    if (error != 200) {
        console.log(response.statusCode)
    }
});
