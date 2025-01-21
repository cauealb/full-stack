const users = require('../users')

module.exports = {
    users(request, response) {

        const { order } = request.query

        const arrayUsers = users.sort((a, b) => {
            if(order === 'desc') {
                return a.id < b.id ? 1 : -1;
            }

            return a.id > b.id ? 1 : -1;
        })

        response.writeHead(200, { 'Content-Type': 'application/json' }),
        response.end(JSON.stringify(arrayUsers))
    }
}