var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var ExerciseSession = require('./exercise_unit');

var WorkoutSchema  = new Schema({
  userId: '',
  date: {type: Date, required: true, default: Date},
  exerciseUnits: [{
    type: Schema.Types.ObjectId,
    ref: 'ExerciseSession'
  }]
});

WorkoutSchema.pre('remove', function(next) {
  var unitsLength = this.exerciseUnits.length;
  this.exerciseUnits.forEach(function(unit, index) {
      ExerciseSession.remove({
        _id: unit
      }, function(err, session) {
        if(index + 1 == unitsLength) {
          next();
        }
      });
  });
  
  if(unitsLength == 0) {
    next();
  }
});

module.exports = mongoose.model('Workout', WorkoutSchema);
