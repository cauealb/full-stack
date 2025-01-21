const http = require('http')
const routes = require('../src/Routes/Routes')
const {URL} = require('url')
const UseParse = require('../src/Controller/UseParse')

const server = http.createServer((request, response) => {
    const parseUrl = new URL(`http://localhost:2006${request.url}`) 
    console.log(`Method: ${request.method} | endpoint: ${parseUrl.pathname}`)

    let { pathname } = parseUrl
    let id = null;
    let splitPathName = pathname.split('/').filter((item) => Boolean(item))

    if(splitPathName.length > 1) {
        pathname = `/${splitPathName[0]}/:id`
        id = splitPathName[1]
    }   

    const route = routes.find((endpoint) => (
        endpoint.method === request.method && endpoint.endpoint === pathname
    ))

    if(route) {
        request.query = Object.fromEntries(parseUrl.searchParams) 
        request.params = { id };
        response.send = (statusCode, body) => {
            response.writeHead(statusCode, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(body))
        }

        if(['PUT', 'POST', 'PATH'].includes(request.method)){
            UseParse(request, () => route.handler(request, response))
        } else{
            route.handler(request, response)
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' })
        response.end(`<p>Cannot ${request.method} ${parseUrl.pathname}</p>`)
    }
    
})

server.listen(2006, () => console.log('Servidor ouvindo na porta http://localhost:2006'))