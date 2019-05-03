const express = require('express')
const projectsRouter = require('../routers/projectsRouter')
const actionsRouter = require('../routers/actionsRouter')

const server = express()

server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)


server.get('/', (req, res) => {
    res.status(200).json({message: 'Server is running'})
})

module.exports = server