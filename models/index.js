var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/zoo_app');

module.exports.Zoo = require('./zoo');

module.exports.Animal = require('./animal');