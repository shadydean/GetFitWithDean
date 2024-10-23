const User = require('../models/User');
const Course = require('../models/Course');
const Task = require('../models/Task');

const displayDashboardPlan = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request (set by the protect middleware)

    // Find the user and populate their active course
    const user = await User.findById(userId).populate('activeCourse'); // Make sure you have an activeCourse field in User

    if (!user || !user.activeCourse) {
      return res.status(404).json({ message: 'No active course found for this user.' });
    }

    res.status(200).json({
      plan: user.activeCourse, // Sending the active course details
    });
  } catch (error) {
    console.error('Error fetching dashboard plan:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

// Controller to get the user's tasks for the day
const displayDashboardTasks = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request

    // Fetch the user's active course
    const user = await User.findById(userId).populate('activeCourse');
    if (!user || !user.activeCourse) {
      return res.status(404).json({ message: 'No active course found for this user.' });
    }

    // Find tasks associated with the user's active course
    const tasks = await Task.find({
      course: user.activeCourse._id, // Assuming the course name is used to filter tasks
    });

    res.status(200).json({
      tasks, // Sending the tasks for the active course
    });
  } catch (error) {
    console.error('Error fetching dashboard tasks:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = {
  displayDashboardPlan,
  displayDashboardTasks,
};
