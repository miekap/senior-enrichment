'use strict';
const Sequelize = require('sequelize')
const db = require('../index')

module.exports = db.define('campus', {
  name: Sequelize.STRING,
  imageUrl: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return `/img/${this.name.toLowerCase()}.jpg`
    }
  }
})
