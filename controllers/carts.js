var Carts = require('../models/product');

module.exports = {
    index,
    delete: deleteCart,
}

function index(req, res) {
    Product.find({}, function(err, product) {
        res.render('index', { product });

    });
}
function deleteCart(req, res) {
    Carts.deleteOne(req.params.id);
    res.redirect('/');
}