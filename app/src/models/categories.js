var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({ name: String }, { collection: 'categories' });

var Category = mongoose.model('Category', CategorySchema);

exports.Category = Category;
exports.CategorySchema = CategorySchema;
