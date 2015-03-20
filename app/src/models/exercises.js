var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({ name: String }, { collection: 'exercises' });

var Exercise = mongoose.model('Exercise', ExerciseSchema);

exports.Exercise = Exercise;
exports.ExerciseSchema = ExerciseSchema;
