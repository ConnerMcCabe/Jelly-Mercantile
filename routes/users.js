var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/users')

router.post('/products/:id/reviews', reviewsCtrl.create);


//cart only available while isLoggedIn
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
