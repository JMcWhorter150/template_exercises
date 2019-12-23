const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html' 
    });

    const content = '<h1>Hello!</h1>';
    res.end(content);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});