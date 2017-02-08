var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ExerciseSession = require('./exercise_session');

var WorkoutSchema  = new Schema({
  userId: '',
  date: {type: Date, required: true, default: Date},
  _brorId: String,
  sessions: Array
});

WorkoutSchema.pre('remove', function(next) {
  var sessionsLength = this.sessions.length;
  this.sessions.forEach(function(s, index) {
      ExerciseSession.remove({
        _brorId: s._brorId
      }, function() {
        if(index + 1 == sessionsLength) next();
      });
  });

  if(sessionsLength == 0) next();
});

WorkoutSchema.pre('save', function(next) {
  var sessionsLength = this.sessions.length;
  var self = this;
  this.sessions.forEach(function(s, index) {
    var newSession = new ExerciseSession({
      userId: s.userId,
      _exerciseId: s._exerciseId,
      sets: s.sets,
      date: self.date,
      _brorId: s._brorId,
      _workoutId: self._brorId
    });
    newSession.save(function(err) {
      if(index + 1 == sessionsLength) {
        self.sessions = [];
        next();
      }
    });
  });

  if(sessionsLength == 0) next();
});

module.exports = mongoose.model('Workout', WorkoutSchema);
