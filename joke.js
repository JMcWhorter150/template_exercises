const request = require('request-promise');

function getJoke() {
    request('https://api.chucknorris.io/jokes/random?category=dev')
        .then(r => r.toString())
        .then(r => r.split("value")[1])
}

console.log(getJoke());