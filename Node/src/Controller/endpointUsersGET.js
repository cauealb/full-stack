let users = require('../users')

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
        const { body } = request
        const lastUserId = users[users.length - 1].id
        const newArray = {
            id: lastUserId + 1,
            Name: body.Name 
        }

        console.log(newArray)
        users.push(newArray)
        response.send(200, newArray)
    },

    deleteUser(request, response) {
        const { id } = request.params
        const idNumber = Number(id)

        const exitsID = users.find((item) => item.id === idNumber)

        if(!exitsID) {
            return response.send(400, { error: 'Cannot find user' })
        }

        users = users.filter((item) => {
            return item.id != idNumber
        })
        
        response.send(200, users)

    }
}