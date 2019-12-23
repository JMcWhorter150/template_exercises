const http = require('http');
const fs = require('fs');
const blog = require('./blog.js');

const header = fs.readFileSync('templates/header.html');
const footer = fs.readFileSync('templates/footer.html');
const nav = fs.readFileSync(`templates/nav.html`);

const server = http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'text/html' 
        });
    
        let content = `<h1>Hello!</h1><h2>It is ${new Date()}</h2>`;
        if (req.url === "/blog") {
            content = `${blog.getContent(5)}`;
        }
        res.end(header + nav + content + footer);
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});