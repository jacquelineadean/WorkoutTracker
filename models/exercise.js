// Require dependencies
// ==============================================================
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Schema
// ==============================================================
const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Type of exercise is required."
    },
    name: {
        type: String,
        trim: true,
        required: "Name of exercise is required."
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
});

// Export model
// ==============================================================
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;