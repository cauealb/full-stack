const Controller = require('../Controller/endpointUsersGET')

module.exports = [
    {
        method: 'GET',
        endpoint: '/users',
        handler: Controller.users,
    },
    {
        method: 'GET',
        endpoint: '/users/:id',
        handler: Controller.getUserByid,
    },
    {
        method: 'POST',
        endpoint: '/users',
        handler: Controller.createUser,
    },
    {
        method: 'DELETE',
        endpoint: '/users/:id',
        handler: Controller.deleteUser,
    },
    {
        method: 'PUT',
        endpoint: '/users/:id',
        handler: Controller.alterUser,
    }
]