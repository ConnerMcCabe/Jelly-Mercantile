var Reviews = require('../models/user')

module.exports = {
    create

};

function create(req, res) {
    Reviews.findById(req.params.id, function(err, product) {
      product.reviews.push(req.body);
      product.save(function(err) {
        res.redirect(`/products/${product._id}`);
      });
    });
  }

