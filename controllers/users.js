var User = require('../models/user')

module.exports = {
    create,
    newReview,
    delete: deleteReview,
};
//create reviews
function create(req, res) {
  User.find({googleId:req.params.id}, function(err, user) {
    var temp = {};
    console.log(user);
      temp.content = req.body.content;
      temp.rating = req.body.rating;
      user[0].review.push(temp);
      user[0].save(function(err) {
        if(err){res.redirect('/')}
        res.redirect('/carts');
        
      });
    });
  }
function newReview(req, res) {
  
  res.render('carts/reviews', {user: req.user}  )
}

function deleteReview(req, res) {
  User.find({googleId:req.params.id}, function(err, user) {
    user[0].review.splice(req.params.idx, 1);
    user[0].save();
    res.redirect('/carts');
  })
 
}