var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/users')

router.get('/carts/reviews', reviewsCtrl.newReview);
router.post('/carts/:id', reviewsCtrl.create);
router.delete('/carts/reviews/:idx/:id',reviewsCtrl.delete);

module.exports = router;  
