// Require Models
// ===================================================================
const db = require('../models/workout.js');
const router = require('express').Router();

// Routes
// ===================================================================

// POST route for creating a workout
router.post('/api/workouts', (req, res) => {
    db.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            console.log(err);
        });
});
// GET route for last workout
router.get('/api/workouts', (req, res) => {
    db.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
        })
});
// GET route for workouts in range
router.get('/api/workouts/range', (req, res) => {
    db.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
});
// PUT route to add exercise
router.put('/api/workouts/:id', ({params, body}, res) => {
    db.findByIdAndUpdate(params.id, {$push : {exercises: body}}, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
})

module.exports = router;