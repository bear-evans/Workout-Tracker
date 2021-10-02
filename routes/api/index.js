const router = require("express").Router();
const db = require("../../models");

// Workout Routes
// ---------------------------------------------------------
// Get all workouts
router.get("/workouts", async (req, res) => {
  try {
    // let results = await db.Workout.find({});

    const aggregate = Workout.find({
      $addFields: {
        totalDuration: { $sum: [exercises.duration] },
      },
    });
    aggregate.addFields({});
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

// ---------------------------------------------------------
// update a workout
router.put("/workouts/:id", async (req, res) => {
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

// ---------------------------------------------------------
// create a new workout
router.post("/workouts", async (req, res) => {
  try {
    let results = await db.Workout.create(req.body);
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

// ---------------------------------------------------------
// gets workouts in range
router.get("/workouts/range", async (req, res) => {
  try {
    let results = await db.Workout.find({});

    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
