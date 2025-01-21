const http = require('http')
const routes = require('../src/Routes/Routes')

const server = http.createServer((request, response) => {
    console.log(`Method: ${request.method} | endpoint: ${request.url}`)

    const route = routes.find((endpoint) => (
        endpoint.method === request.method && endpoint.endpoint === request.url
    ))

    if(route) {
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end(`<p>Cannot ${request.method} ${request.url}</p>`)
    }
    
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))