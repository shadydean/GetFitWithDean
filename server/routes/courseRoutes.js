const express = require('express');
const { getAllCourses, addCourse } = require('../controllers/courseController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/courses', protect, getAllCourses);
router.post('/courses', protect, addCourse);

module.exports = router;
