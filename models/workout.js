// Require dependencies
// ==============================================================
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define Schema
// ==============================================================
const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
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
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// Export model
// ==============================================================
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;