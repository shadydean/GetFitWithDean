const Course = require('../models/Course');

const getAllCourses = async (req, res) => {
  try {
      // Find all courses without using populate, since tasks are embedded
      const courses = await Course.find();

      res.json(courses);
  } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).send('Server error');
  }
};

module.exports = { getAllCourses };
