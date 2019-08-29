var USER = require('../models/user');
var prod = require('../models/product');

module.exports = {
    index,
    show,
    prodIdx,
};

function index(req, res) {
    prod.find({}, function(err, product) {
        if (err) res.send(err)
        console.log('line 12 controllers/products.js', product)
        res.render('index', { product, USER });
    });
}
function show(req, res) {
    Product.findById(req.params.id, function(err, product) {
        if(err) res.send(err)
        res.render('products/product', {});
    });
}
function prodIdx(req, res) {
    prod.find( {} , function(err, products) {
        if (err) res.send(err)
        console.log('these are the products', products)
        res.render('products/product', {user: req.user, product: products});
    });
}