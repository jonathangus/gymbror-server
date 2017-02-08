var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExerciseSchema  = new Schema({
    userId: Number,
    type: String,
    exerciseName: String,
    _brorId: String,
    sessions: []
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
