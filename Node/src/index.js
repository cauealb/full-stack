const http = require('http')
const routes = require('../src/Routes/Routes')
const {URL} = require('url')

const server = http.createServer((request, response) => {
    const parseUrl = new URL(`http://localhost:2006${request.url}`) 

    console.log(`Method: ${request.method} | endpoint: ${parseUrl.pathname}`)

    const route = routes.find((endpoint) => (
        endpoint.method === request.method && endpoint.endpoint === parseUrl.pathname
    ))

    if(route) {
        request.query = Object.fromEntries(parseUrl.searchParams) 
        route.handler(request, response)
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end(`<p>Cannot ${request.method} ${parseUrl.pathname}</p>`)
    }
    
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))