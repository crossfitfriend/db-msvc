var mongoose = require('mongoose');
var Sentence = require('../models/sentences');
var users = require('../models/users');
var exercises = require('../models/exercises');
var categories = require('../models/categories');
var achievements = require('../models/achievement');
var mongoConfig = require('../config/mongo');

var authPrefix = mongoConfig.user ? mongoConfig.user+':'+mongoConfig.password+'@' : "";
var mongoUrl = 'mongodb://'+authPrefix+mongoConfig.host+':'+mongoConfig.port+'/'+mongoConfig.db;
console.log("mongo server connection url: "+mongoUrl);
mongoose.connect(mongoUrl);

var mongodrv = {};

mongodrv.firstSentence = function(){
  Sentence.findOne({}, function(err, sentence){
    console.log("Sentence is: "+sentence);
  });
};

mongodrv.addSentence = function(msg) {
  console.log("msg = " + msg);
  var _sentence = new Sentence({message: msg});
  _sentence.save(function(err, result){
    console.log(result);
  });
};

mongodrv.executeForUser = function(email, callback) {
  users.User.findOne({email: email}).exec(callback);
};

mongodrv.executeForAchievement = function(id, callback){
  achievements.Achievement.findById(id).exec(callback);
};

mongodrv.executeForCategory = function(id, callback){
  categories.Category.findById(id).exec(callback);
};

mongodrv.executeForExercise = function(id, callback){
  exercises.Exercise.findById(id).exec(callback);
};

module.exports = mongodrv;
