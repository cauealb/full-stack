const http = require('http');
const users = require('../src/users')

const server = http.createServer((request, response) => {
    console.log(`Method: ${request.method} | endpoint: ${request.url}`)

    if(request.method === 'GET' && request.url === '/users') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(users))
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`)
    }

    
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))