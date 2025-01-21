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
    },

    getUserByid(request, response){
        const { id } = request.params

        const user = users.find((item) => item.id === Number(id))
        console.log(user)
        // console.log

        if(user) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(user))
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json'});
            response.end(JSON.stringify({ error: 'Cannot find user' }))
        }
    
        // if(user) {
        // } else {
        //     response.writeHead(404, { 'Content-Type': 'application/json' });
        //     response.end({ error: 'Cannot find user' })
        // }

    }
}