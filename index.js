const http = require('http');
const shortid = require('shortid');

module.exports = ({port, token}) => http.createServer((request, response) => {

    response.setHeader("Content-Type", "application/json");

    response.end(JSON.stringify({random: shortid(), token}, null, 4));

}).listen(port, (err) => {

    if (err) {
        return console.log('ERROR', err);
    }

    console.log(`server is listening on ${port}`);
});
