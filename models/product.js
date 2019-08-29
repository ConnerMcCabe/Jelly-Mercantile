var mongoose = require('mongoose');
var Schema = mongoose.Schema

var productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    img: String,
  }, {
    timestamps: true,
    collection: 'Jelly'
});


module.exports = mongoose.model('Products', productSchema);