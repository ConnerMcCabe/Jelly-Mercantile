var mongoose = require('mongoose');
var mongoose = require('mongoose');
var Product = require('./product');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    googleId: String,
    // cart: [Product],
//cart array gets product pushed into it
});


module.exports = mongoose.model('User', userSchema);