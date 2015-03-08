var mongoose = require('mongoose');

var sentences = new mongoose.Schema({
  message: String
}, { collection: 'sentences' });

var Sentence = mongoose.model('Sentence', sentences);

module.exports = Sentence;
