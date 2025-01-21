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

        response.send(200, arrayUsers)
    },

    getUserByid(request, response){
        const { id } = request.params

        const user = users.find((item) => item.id === Number(id))

        if(user) {
            return response.send(200, user)
        } 

        response.send(404, { error: 'Cannot find user' })

    },

    createUser(request, response) {
        let body = ''

        request.on('data', (chunck) => {
            body += chunck
        })

        request.on('end', () => {
            body = JSON.parse(body)
            const lastUserId = users.length - 1
            
            const newArray = {
                id: lastUserId + 1,
                Name: body.Name 
            }
            users.push(newArray)

            response.send(200, newArray)
        })

    }
}