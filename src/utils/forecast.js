const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5a38800371d00e8b5bbee4d4979c455c&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'

    request({ url, json: true}, (error, {body} = {}) => {
    if(error){
        callback('Unable to connect to the weather service', undefined)
    }else if(body.error){
        callback('Unable to find location', undefined)
    }else{
        callback(undefined, `Current temperature is ${body.current.temperature} degress and it feels like ${body.current.feelslike} degrees`)
    }
})
}
module.exports = forecast