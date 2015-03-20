var mongoose = require('mongoose');

var exercises = new mongoose.Schema({ name: String }, { collection: 'exercises' });

var Exercise = mongoose.model('Exercise', exercises);

module.exports = Exercise;
