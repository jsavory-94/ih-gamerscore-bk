var express = require('express');
var router = express.Router();

const User = require('../models/user');

router.post('/input-form', (req, res, next) => {
    const id = req.session.user;
    const scores = req.body.scores;
    console.log(id);
    
    User.findByIdAndUpdate(id, scores, {new: true}, function(err,user){
        if (err) return handleError(err);
        res.json(scores);
    });
});

module.exports = router;