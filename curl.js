const request = require("request");

function curl(link, done) {
  request(link, function (error, response, body) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    done(body); // Print the HTML for the Google homepage.
  });
}

module.exports = curl;
