var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExerciseSessionSchema = new Schema({
  userId: Number,
  sets: Array,
  _exerciseId: String,
  _brorId: String,
  _workoutId: String,
  date: {type: Date, required: true, default: Date},
});

module.exports = mongoose.model('ExerciseSession', ExerciseSessionSchema);
