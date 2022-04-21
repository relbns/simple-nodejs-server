const http = require('http');

const port = 3000;

const STATUS_CODES = {
    'OK': 200,
    'NOT_FOUND': 404,
    'SERVER_ERROR': 500
}

// create my first server
const myServer = http.createServer(function (request, response) {

    // adding the response status code and other http headers
    response.writeHead(STATUS_CODES.OK, { 'Content-Type': 'text/html' });

    const url = request.url;
    
    if (url === '/about') {
        response.write('<h1>This is the about-us page<h1>'); // write a response
        response.end(); // end the response
    } else {
        response.write('<h1>Hello World!<h1>'); // write a response
        response.end(); // end the response
    }

});

// setting the server to start listening on port 3000
myServer.listen(port, function () {
    console.log(`server listening on port ${port}`);
});

