const express = require('express')

const UserController = require('./controllers/UserController')
const WorkController = require('./controllers/WorkController')

const auth = require('./middleware/auth')

const routes = express.Router()

routes.get('/user',auth,UserController.index)
routes.put('/user/:id',auth,UserController.update)
routes.post('/auth',UserController.auth)
routes.post('/user/register',UserController.create)
routes.delete('/user/:id',UserController.destroy)

routes.get('/work',WorkController.index)
routes.get('/work/:id',WorkController.show)
routes.delete('/work/:id',auth,WorkController.destroy)
routes.put('/work/:id',auth,WorkController.update)
routes.post('/work/create',auth,WorkController.create)

module.exports = routes