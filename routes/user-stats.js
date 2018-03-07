var express = require('express');
var router = express.Router();

const User = require('../models/user');

router.post('/input-form', (req, res, next) => {
    const id = req.session.currentUser._id;
    const scores = req.body.scores;
    
    User.findByIdAndUpdate(id, { $set: { scores: scores } }, {new: true}, function(err,user){
        if (err) return handleError(err);
        res.json(user);
    });
});

router.get('/user/:id', (req, res) => {
    User.findById(id)
    .then((user)=> res.json(user))
  });



module.exports = router;