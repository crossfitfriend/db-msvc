/**
 * Created by danh on 3/8/15.
 */
var mongoose = require('mongoose');
var users = new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        achievements: Array
    },
    {
        collection: 'users'
    });

users.methods.getAchievements = function(){
    return this.achievements;
};

var User = mongoose.model('User', users);


module.exports = User;