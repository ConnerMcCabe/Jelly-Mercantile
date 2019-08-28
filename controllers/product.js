var Product = require('../models/product');

module.exports = {
    index,
    show,
  
};

function index(req, res) {
    Product.find({}, function(err, product) {
        res.render('index', { product });

    });
}

function show(req, res) {
    Product.findById(req.params.id, function(err, product) {
        res.render('products/product', {});
    });
}