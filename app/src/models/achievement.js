var mongoose = require('mongoose');
var Category = require('../models/categories.js').Category;
var Exercise = require('../models/exercises.js').Exercise;

var AchievementSchema = new mongoose.Schema(
    { exercise: mongoose.Schema.Types.ObjectId, category: mongoose.Schema.Types.ObjectId, measurement: Number },
    { collection: 'achievements' }
);

var Achivement = mongoose.model('Achivement', AchievementSchema);
//
//AchievementSchema.methods.getAchievementObject = function(id, callback){
//  Achivement.findById(id).exec(function(err, achievement){
//      Category.findById(achievement.category).exec(function(err, category){
//          achievement.category = category;
//      });
//      Exercise.findById(achievement.exercise).exec(function(err, exercise){
//          achievement.exercise = exercise;
//      });
//      callback(err, achievement)
//  });
//};

exports.Achievement = Achivement;
exports.AchievementSchema = AchievementSchema;
