'use strict'
const api = require('express').Router()
const { Campus } = require('../../db/models')

api.get('/', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.send(campuses))
	.catch(next)
})

api.post('/', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.status(201).send(campus))
	.catch(next)
})

api.get('/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => {
		(campus) ? res.send(campus)
						 : res.status(404).send('Campus not found.')
	})
	.catch(next)
})

api.put('/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => campus.update(req.body))
	.then(campus => res.status(200).send(campus))
	.catch(next)
})

api.delete('/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => campus.destroy())
	.then(() => res.status(204).send('Campus deleted.'))
	.catch(next)
})

module.exports = api
