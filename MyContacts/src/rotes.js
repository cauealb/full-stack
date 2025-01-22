const { Router } = require('express')
const ContactController = require('./controllers/ContactController')

const route = Router()

route.get('/contacts', ContactController.index);
route.get('/contacts/:id', ContactController.show)

module.exports = route