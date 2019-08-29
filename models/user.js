var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  }, {
    timestamps: true
});

var userSchema = new Schema({
    googleId: String,
    name: String,
    review: [reviewSchema],
    cart: [],
//cart array gets product pushed into it
});


module.exports = mongoose.model('User', userSchema);