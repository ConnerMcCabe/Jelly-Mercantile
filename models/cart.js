var mongoose = require('mongoose');
var Schema = mongoose.Schema

var cartSchema = new Schema({
    name: String,
    type: String,
    price: Number,
    
  }, {
    timestamps: true
});

module.exports = mongoose.model('Cart', cartSchema);


