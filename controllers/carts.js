var Carts = require('../models/cart');

module.exports = {
    index,
    delete: deleteCart,
}
function index(req, res) {
    res.render('../views/cart/index', {
        carts: Carts.getall(),
    });
}

function deleteCart(req, res) {
    Carts.deleteOne(req.params.id);
    res.redirect('/');
}