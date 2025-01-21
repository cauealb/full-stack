const users = require('../src/users')

module.exports = {
    users(request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json' }),
        response.send(JSON.stringify(users))
    }
}