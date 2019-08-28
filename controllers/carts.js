var Carts = require('../models/cart');

module.exports = {
    index,
    new: newCart,
    delete: deleteCart,
}
function index(req, res) {
    res.render('carts/index', {
        carts: Carts.getall(),
        
        
    });
}
function newCart(req, res) {
    res.render('carts/index' );
}
function deleteCart(req, res) {
    Carts.deleteOne(req.params.id);
}