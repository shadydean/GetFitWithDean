const Course = require('../models/Course');
const Task = require('../models/Task');


const getAllCourses = async (req, res) => {
  const courses = await Course.find().populate('tasks');
  res.json(courses);
};



const addCourse = async (req, res) => {
  const { name, description, tasks } = req.body;

  const newCourse = new Course({ name, description, tasks });
  await newCourse.save();

  res.status(201).json(newCourse);
};

module.exports = { getAllCourses, addCourse };
