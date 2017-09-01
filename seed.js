// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require('bluebird');
const db = require('./db');
const {User, Campus, Student} = require('./db/models');

const titanCampus = {name: 'Titan'}

const data = {
  student: [
    {name: 'Mike', email: 'mike@stranger.com', campus: {name: 'Mars'}}, {name: 'Malachi', email: 'malachi@constant.com', campus: titanCampus}, {name: 'Rumfoord', email: 'rumfoord@sirens.com', campus: titanCampus}, {name: 'Ender', email: 'ender@battleschool.com', campus: {name: 'Earth'}}
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item, {
        include: [Campus]
      });
    });
  });
})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
})
