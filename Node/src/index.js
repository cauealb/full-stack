const http = require('http')
const Controller = require('../src/Controller/endpointUsersGET')

const server = http.createServer((request, response) => {
    console.log(`Method: ${request.method} | endpoint: ${request.url}`)

    if(request.method === 'GET' && request.url === '/users') {
        Controller.users(request, response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end(`Cannot ${request.method} ${request.url}`)
    }

    
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))