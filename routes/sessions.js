var express = require('express');
var ExerciseSession = require('../appz/models/exercise_session');
var _ = require('lodash');

module.exports = function(router) {
  router.route('/all_sessions/:userId')
    .get(function(req, res) {
      ExerciseSession
        .find({userId: req.params.userId}, function(err, sessions) {
          // Map the docs into an array of just the _ids
          if (!sessions) {
            res.json([]);
          } else {
            res.json(sessions);
          }
        });
    });
}
