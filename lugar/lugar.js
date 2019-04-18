const axios = require('axios');

const getLugarLatLng = async(dir) => {
    let encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'X-RapidAPI-Key': 'd208722f42msh9f3754897fb4c1ep115a8djsna55b85039b77'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    /*instance.get()
        .then(resp => {
            console.log(resp.data.Results[0]);
        })
        .catch(err => {
            console.log('ERROR!!!!!', err);
        });*/
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}