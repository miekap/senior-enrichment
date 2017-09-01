'use strict'
const api = require('express').Router()

api.use('/campus', require('./campus'));
api.use('/campuses', require('./campus'));

api.use('/student', require('./student'));
api.use('/students', require('./student'));

module.exports = api;
