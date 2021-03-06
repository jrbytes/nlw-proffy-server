import express from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsControlers = new ConnectionsController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsControlers.index)
routes.post('/connections', connectionsControlers.create)

export default routes
