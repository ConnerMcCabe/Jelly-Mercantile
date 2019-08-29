var express = require('express');
var router = express.Router();
var passport = require('passport');
var product = require('../models/product');
var prodCtrl = require('../controllers/product')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});
/* GET OAuth */ 
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
  //need to go back and specify a view
));
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  //need to go back and specify a view
});
router.get('/products', prodCtrl.prodIdx);

router.get('/carts', function(req, res, next) {
  res.render('carts/index', { });
});

module.exports = router;
