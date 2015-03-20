var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('../lib/mongodrv');

app.use(bodyParser.json());

app.listen(3000, function(){
  console.log("Listening on port 3000");
});

// user 1-* achievements
// achievement 1-1 category
// achievement 1-1 exercise
// user => {_id, uname, fname, lname, email, achievements[]}
// achievement => {_id, @category, @exercise, measurement}
// category => {_id, name}
// exercise => {_id, name}

app.get('/achievements/:email', function(request, response){
  var achievements = [];
  mongo.getAchievementsForUser(request.params.email, function(err, achievements){
    response.json(achievements);
  });
});

app.get('/sentence', function(request, response) {
  var sentence = mongo.firstSentence();
  console.log(sentence)
  response.json(sentence);
});

app.put('/sentence', function(request, response) {
  console.log("request = " + request.body.message);
  mongo.addSentence(request.body.message);
  response.sendStatus(200);
});
