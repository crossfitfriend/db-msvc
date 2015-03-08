var mongoose = require('mongoose');
var Sentence = require('../models/sentences');
var config = require('../config/mongo');

mongoose.connect('mongodb://'+config.user+':'+config.password+'@'+config.host+':'+config.port+'/'+config.db);

var mongodrv = {};
mongodrv.firstSentence = function(){
  console.log("this is a test printout");
  var query = Sentence.findOne({}, function(err, result){
    console.log("count = " + result); 
  });
};

mongodrv.addSentence = function(msg) {
  console.log("msg = " + msg);
  var _sentence = new Sentence({message: msg});
  _sentence.save(function(err, result){
    console.log(result);
  });
};

module.exports = mongodrv;
