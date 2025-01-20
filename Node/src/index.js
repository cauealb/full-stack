const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html' })
    response.end('<h1>Hello Word</h1>')
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))