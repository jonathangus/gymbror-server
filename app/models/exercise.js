var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExerciseSchema  = new Schema({
    name: '',
    userId: Number,
    sessions: [{
        type: Schema.Types.ObjectId,
        ref: 'ExerciseSession'
    }],
    type: String
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
