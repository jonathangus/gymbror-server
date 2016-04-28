var express = require('express');
var User = require('../app/models/user');

module.exports = function(router) {
  router.route('/user/:user_id')
    .get(function (req, res) {
      User.findOne({_id: req.params.user_id}, function(err, user) {
        if(!user) {
          var user = new User();
        }
        else {
          res.json(user);
        }

        exercise.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'Exercise created!' });
        })

        console.log(user);
        if(err) {
          res.send(err);
        }
        res.json(user);
      });
    });
  
}