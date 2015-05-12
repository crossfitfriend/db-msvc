var express = require('express');
var HttpStatus = require('http-status-codes');
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
  mongo.executeForUser(request.params.email, function(err, user) {
    if (err) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: err});
    } else if (user == null) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: "Couldn't find user for email "+request.params.email});
    } else {
      response.json(user);
    }
  });
});

app.get('/achievements/:id', function(request, response){
  mongo.executeForAchievement(request.params.id, function(err, achievement){
    if(err){
      throw new Error(err);
    }
    response.json(achievement);
  });
});

app.get('/exercises/:id', function(request, response){
  mongo.executeForExercise(request.params.id, function(err, exercise){
    if(err){
      throw new Error(err);
    }
    response.json(exercise);
  });
});

app.get('/categories/:id', function(request, response){
  mongo.executeForCategory(request.params.id, function(err, category){
    if(err){
      throw new Error(err);
    }
    response.json(category);
  });
});
