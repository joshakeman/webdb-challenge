const express = require('express')

const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

// const Projects = require('./projects-model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await db('projects')
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const project = await db('projects')
            .join('actions', 'actions.project_id', 'projects.id')
            .where('projects.id', `${req.params.id}`)
            .select()
            // .select('projects.id', 'projects.name', 'projects.description', 'projects.completed', 'actions.description', 'actions.notes', 'actions.completed')
            // .with('actions', knex.raw(`select * from "actions" where "actions.project_id" = ?', ${req.params.id}`)).select('*').from('actions')
        console.log(project)
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const [id] = await db('projects').insert(req.body)

        const project = await db('projects')
            .where({ id })
            .first()

        res.status(201).json(project)
    } catch (error) {
        const message = errors[error.errno] || 'We ran into an error'
        res.status(500).json({ message, error })
    }
})


module.exports = router