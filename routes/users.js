var express = require('express');
var router = express.Router();
var cartCtrl = require('../controllers/carts')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/', cartCtrl.index);
// router.get('/new', cartCtrl.new);
// router.post('/', cartCtrl.create);
// //need to add a router.put('/:id', cartCtrl.update);
// router.delete('/:id', cartCtrl.delete);




function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
