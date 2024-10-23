const User = require('../models/User');
const Task = require('../models/Task');

const displayProgress = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the request

    // Find the user and populate their active course
    const user = await User.findById(userId).populate('activeCourse');
    if (!user || !user.activeCourse) {
      return res.status(404).json({ message: 'No active course found for this user.' });
    }

    // Fetch tasks associated with the user's active course
    const tasks = await Task.find({ course: user.activeCourse.name });

    // Organizing tasks by week (assuming each task is relevant for each week)
    const weeks = { 1: [], 2: [], 3: [], 4: [] };

    tasks.forEach(task => {
      // Add tasks to each week
      for (let week = 1; week <= 4; week++) {
        weeks[week].push(task);
      }
    });

    res.status(200).json({
      tasks: weeks, // Returning tasks organized by week
    });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = {
  displayProgress,
};
