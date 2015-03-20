/**
 * Created by danh on 3/8/15.
 */
var mongoose = require('mongoose');
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

exports.UserSchema = UserSchema
exports.User = User;