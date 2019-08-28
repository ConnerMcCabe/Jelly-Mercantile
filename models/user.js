var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    googleId: String
 
});


  module.exports = mongoose.model('User', userSchema);