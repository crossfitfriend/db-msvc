var mongoose = require('mongoose');

var AchievementSchema = new mongoose.Schema(
    { exercise: mongoose.Schema.Types.ObjectId, category: mongoose.Schema.Types.ObjectId, measurement: Number },
    { collection: 'achievements' }
);

var Achivement = mongoose.model('Achivement', AchievementSchema);

exports.Achievement = Achivement;
exports.AchievementSchema = AchievementSchema;
