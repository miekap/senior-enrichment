'use strict'
const api = require('express').Router()
const { Student } = require('../../db/models')

api.get('/', (req, res, next) => {
	Student.findAll()
	.then(students => res.send(students))
	.catch(next)
})

api.post('/', (req, res, next) => {
	Student.create(req.body)
	.then(student => res.status(201).send(student))
	.catch(next)
})

api.get('/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => {
		(student) ? res.send(student)
						 : res.status(404).send('Student not found.')
	})
	.catch(next)
})

api.put('/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => student.update(req.body))
	.then(student => res.status(200).send(student))
})

api.delete('/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => student.destroy())
	.then(() => res.status(204).send(`Student deleted.`))
	.catch(next)
})

module.exports = api
