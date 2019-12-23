const http = require('http');
const fs = require('fs');
const blog = require('./blog.js');

const header = fs.readFileSync('templates/header.html');
const footer = fs.readFileSync('templates/footer.html');
const nav = fs.readFileSync(`templates/nav.html`);

const server = http.createServer((req, res) => {
    
    if(req.url === "/blog") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        const blogContent = `${blog.getContent()}`;

        res.end(header + nav + blogContent + footer);
    } else if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html' 
        });
    
        const content = `<h1>Hello!</h1><h2>It is ${new Date()}</h2>`;
        res.end(header + nav + content + footer);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })

        res.end('404: File not found')
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});