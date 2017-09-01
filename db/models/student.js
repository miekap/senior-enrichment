'use strict';
const Sequelize = require('sequelize');
const db = require('../index.js');
const Campus = require('./campus');

module.exports = db.define('student', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
}, {
  defaultScope: {
    include: [Campus]
  }
})
