var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('../lib/mongodrv');

app.use(bodyParser.json());

app.listen(3001, function(){
  console.log("Listening on port 3001");
});

// user 1-* achievements
// achievement 1-1 category
// achievement 1-1 exercise
// user => {_id, uname, fname, lname, email, achievements[]}
// achievement => {_id, @category, @exercise, measurement}
// category => {_id, name}
// exercise => {_id, name}

app.get('/users/:email', function(request, response){
  mongo.executeForUser(request.params.email, function(err, user){
    response.json(user);
  });
});

app.get('/achievements/:id', function(request, response){
  mongo.executeForAchievement(request.params.id, function(err, achievement){
    response.json(achievement);
  });
});

app.get('/exercises/:id', function(request, response){
  mongo.executeForExercise(request.params.id, function(err, exercise){
    response.json(exercise);
  });
});

app.get('/categories/:id', function(request, response){
  mongo.executeForCategory(request.params.id, function(err, category){
    response.json(category);
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
