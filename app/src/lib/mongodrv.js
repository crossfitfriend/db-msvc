var mongoose = require('mongoose');
var Sentence = require('../models/sentences');
var User = require('../models/users');
var Exercise = require('../models/exercises');
var Achievement = require('../models/achievement');
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

mongodrv.getAchievementsForUser = function(email, callback) {
  User.findOne({email: email}).select({'achievements':1, "_id": 0}).exec(function(err, result){
    console.log("result.achievements are: "+result.achievements);
    Achievement.find().where('_id').in(result.achievements).exec(callback);
  });
};

mongodrv.getAchievement = function(id, callback){
  Achievement.findById(id).exec(callback);
};

module.exports = mongodrv;
