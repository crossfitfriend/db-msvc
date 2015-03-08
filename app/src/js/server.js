var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.text());

var mongo = require('../lib/mongodrv');

app.get('/sentence', function(request, response) {
  var sentence = mongo.firstSentence();
  response.json(sentence);
});

app.put('/sentence', function(request, response) {
  console.log(request);
  mongo.addSentence(request.body);
  response.sendStatus(200);
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
