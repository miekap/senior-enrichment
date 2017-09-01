'use strict';

const User = require('./user')
const Student = require('./student')
const Campus = require('./campus')

Student.belongsTo(Campus);
Campus.hasMany(Student, {
	foreignKey: 'campusId',
  onDelete: 'cascade',
  hooks: true
});

module.exports = {User, Student, Campus}
