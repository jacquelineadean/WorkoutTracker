// Require Models
// ===================================================================
const db = require("../models");

// Routes
// ===================================================================
module.exports = app => {

    // POST route for creating a workout
    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create({type: body.type})
            .then(dbWorkout => {
                res.json(dbWorkout)
            }).catch(err => {
                console.log(err);
            });
    });
    // GET route for last workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            console.log(err);
        })
    });
    // GET route for workouts in range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });
    // PUT route to add exercise
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            })
    })
}