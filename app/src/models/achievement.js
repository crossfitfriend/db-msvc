var mongoose = require('mongoose');

var achivements = new mongoose.Schema(
    { exercise: mongoose.Schema.Types.ObjectId, category: mongoose.Schema.Types.ObjectId, measurement: Number },
    { collection: 'achievements' }
);

var Achivement = mongoose.model('Achivement', achivements);

module.exports = Achivement;
