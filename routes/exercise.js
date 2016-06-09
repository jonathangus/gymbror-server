var express = require('express');
var Exercise = require('../app/models/exercise');
var _ = require('lodash');

module.exports = function(router) {
  router.route('/exercises/:user_id')
    .get(function(req, res) {
      Exercise
        .find({userId: req.params.user_id}, function(err, exercises) {
          if (!exercises) {
            res.json([]);
          } else {
            res.json(exercises);
          }
        });
    });


  router.route('/add_exercise')
    .post(function(req, res) {
      var exercise = new Exercise();
      exercise.exerciseName = req.body.exerciseName;
      exercise.userId = req.body.userId;
      exercise.type = req.body.type || 'weight';
      exercise._brorId = req.body._brorId;
      exercise.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          success: true,
          message: 'Exercise created!'
        });
      })
    });

  router.route('/delete_exercise/:exercise_id')
    .delete(function(req, res) {
        Exercise.remove({
            _brorId: req.params.exercise_id
        }, function(err, exercise) {
            if (err) {
              res.send(err);
            }

            res.json({
              success: true,
              message: 'Successfully deleted'
            });
        });
    });

}
