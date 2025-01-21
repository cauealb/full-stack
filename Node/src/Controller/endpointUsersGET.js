const users = require('../users')

module.exports = {
    users(request, response) {
        response.writeHead(200, { 'Content-Type': 'application/json' }),
        response.end(JSON.stringify(users))
    }
}