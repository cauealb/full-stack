const { Router } = require('express')
const ContactController = require('./controllers/ContactController')
const CategoryController = require('./controllers/CategoryController')

const route = Router()

route.get('/contacts', ContactController.index);
route.get('/contacts/:id', ContactController.show);
route.delete('/contacts/:id', ContactController.delete)
route.post('/contacts', ContactController.store)
route.put('/contacts/:id', ContactController.update)

route.get('/categories', CategoryController.index)
route.post('/categories', CategoryController.store)
route.put('/categories/:id', CategoryController.update);
route.delete('/categories/:id', CategoryController.delete);
route.get('/categories/:id', CategoryController.findById)

module.exports = route