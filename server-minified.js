require('http').createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<h1>${request.url === '/about' ? 'This is the about-us page' : 'Hello World'}<h1>`);
    response.end();
}).listen(3000, () => {
    console.log('server listening on port 3000');
});