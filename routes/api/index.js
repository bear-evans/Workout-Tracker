const router = require("express").Router();
const { response } = require("express");
const db = require("../models");

// Workout Routes
// ---------------------------------------------------------
// Get all workouts
router.get("/api/workouts", async (req, res) => {
  try {
    let results = await db.Workout.find({});

    results.forEach((workout) => {
      let total = 0;
      workout.exercises.forEach((exercise) => {
        total = total + exercise.duration;
      });

      workout.totalDuration = total;
    });

    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

// ---------------------------------------------------------
// update a workout
router.put("api/workouts/:id", async (req, res) => {
  try {
    let results = await db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      },
      { new: true }
    );

    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
