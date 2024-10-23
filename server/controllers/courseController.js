const Course = require('../models/Course');
const Task = require('../models/Task');


const getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('tasks');
  res.json(courses);
};


module.exports = { getAllCourses };
