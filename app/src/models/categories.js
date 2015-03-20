var mongoose = require('mongoose');

var categories = new mongoose.Schema({ name: String }, { collection: 'categories' });

var Category = mongoose.model('Category', categories);

module.exports = Category;
