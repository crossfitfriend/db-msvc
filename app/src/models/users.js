/**
 * Created by danh on 3/8/15.
 */
var mongoose = require('mongoose');
var Achievement = require('../models/achievement').Achievement;

var UserSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        achievements: Array
    },
    {
        collection: 'users'
    });

var User = mongoose.model('User', UserSchema);

//UserSchema.methods.getUserObject = function(id, callback){
//    User.findById(id).exec(function(err, user){
//        for(var i = 0; i < user.achievements.length; i++){
//            Achievement.getAchievementObject(user.achievements[i], function(achievement){
//                user.achievements[i] = achievement;
//            });
//        }
//        callback(user);
//    });
//};


exports.UserSchema = UserSchema
exports.User = User;