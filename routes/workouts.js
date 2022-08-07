const express = require('express')
const {
  getWorkouts, 
  getWorkout, 
  createWorkout, 
  deleteWorkout, 
  updateWorkout
} = require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)               // require auth for all workout routes
router.get('/', getWorkouts)          // GET all workouts
router.get('/:id', getWorkout)        // GET a single workout
router.post('/', createWorkout)       // POST a new workout
router.delete('/:id', deleteWorkout)  // DELETE a workout
router.patch('/:id', updateWorkout)   // UPDATE a workout

module.exports = router