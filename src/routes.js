const express = require('express')
const routes = express.Router()

const PetController = require('./controllers/Pet')

routes.get('/pets', PetController.index)
routes.get('/pets/:id', PetController.show)
routes.post('/pets', PetController.create)

module.exports = routes
