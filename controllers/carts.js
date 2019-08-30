var Carts = require('../models/product');

module.exports = {
    index,
    
}

function index(req, res) {
    Product.find({}, function(err, product) {
        res.render('index', { product });

    });
}
