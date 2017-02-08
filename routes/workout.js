var express = require('express');
var Workout = require('../appz/models/workout');

module.exports = function(router) {
  router.route('/workouts/:user_id')
    .get(function (req, res) {
      Workout
        .find({userId: req.params.user_id})
        .sort({date: -1})
        .exec(function (err, workouts) {
        if (err)
          res.send(err);

        res.json(workouts);
      });
    });

  router.route('/add_workout')
    .post(function(req, res) {
      var workout = new Workout();
      workout.date = req.body.date;
      workout.userId = req.body.userId;
      workout._brorId = req.body._brorId;
      workout.sessions = req.body.sessions;

      workout.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          success: true,
          message: 'Workout created!'
        });
      })
  });

  router.route('/delete_workout')
    .delete(function(req, res) {
      Workout.findOneAndRemove({
        _brorId: req.body._brorId
      }, function(err, workout) {
        if (err) {
          res.send(err);
        }
        if(workout) {
          workout.remove();
        }
        res.json({
          message: 'Successfully deleted',
          success: true
        });
      });
    });

}
