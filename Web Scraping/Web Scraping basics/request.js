//Request is designed to be the simplest way possible to make http calls. 
//It supports HTTPS and follows redirects by default

const request = require('request')
request("https://www.worldometers.info/coronavirus/",cb)


console.log("Before")
function cb(error, response, html) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('html:', html); // Print the HTML for the Google homepage.
}
console.log("After")
