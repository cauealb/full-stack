const { Router, response } = require('express')
const ContactController = require('./controllers/ContactController')

const route = Router()

route.get('/contacts', ContactController.index);
route.get('/contacts/:id', ContactController.show);
route.delete('/contacts/:id', ContactController.delete)
route.post('/contacts', ContactController.store)

module.exports = route