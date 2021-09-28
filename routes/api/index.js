const router = require("express").Router();
const Workout = require("../../models/Workout");

// Workout Routes
router.get("/api/workouts", (req, res) => {
  res.json("Work in progress!");
});

module.exports = router;
