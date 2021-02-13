### API Pets Knex.js

Doc: https://documenter.getpostman.com/view/14571474/TWDRtL2U#12e3e59f-d523-48c9-ac41-04be25cf6d0d

### 💧 Code/Drops

-- server.js
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('*** SERVIDOR RODANDO NA PORTA 3333 ***'))

-- routes.js
const express = require('express')
const routes = express.Router()

const PetController = require('./controllers/Pet')

routes.get('/pets', PetController.index)
routes.get('/pets/:id', PetController.show)
routes.post('/pets', PetController.create)

module.exports = routes

-- index.js
const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile.development)

module.exports = knex

-- Pet.js
const knex = require('../database')

Feito com ♥ by Devalt
