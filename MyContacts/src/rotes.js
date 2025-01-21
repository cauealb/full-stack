const { Router } = require('express')
const ContactController = require('./controllers/ContactController')

const route = Router()

route.get('/contacts', ContactController.index)

module.exports = route