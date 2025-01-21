const Controller = require('../Controller/endpointUsersGET')

module.exports = [
    {
        method: 'GET',
        endpoint: '/users',
        handler: Controller.users,
    }
]