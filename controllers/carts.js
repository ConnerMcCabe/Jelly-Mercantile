var Carts = require('../models/carts');

module.exports = {
    index,
    new: newCart,
    create,
    delete: deleteCart,
}
function index(req, res) {
    res.render('carts/index', {
        carts: Carts.getall(),
        //time: req.time
    });
}
function newCart(req, res) {
    res.render('carts/new' );
}
function deleteCart(req, res) {
    Carts.deleteOne(req.params.id);
}