const User = require('../models/User');

const displayDashboardPlan = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate('activeCourse');

    if (!user || !user.activeCourse) {
      return res.status(404).json({ message: 'No active course found for this user.' });
    }

    res.status(200).json({
      plan: user.activeCourse,
    });
  } catch (error) {
    console.error('Error fetching dashboard plan:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

const displayDashboardTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).populate('activeCourse');

    if (!user || !user.activeCourse) {
      return res.status(404).json({ message: 'No active course found for this user.' });
    }

    const { currentWeek, currentDay, activeCourse } = user;

    // Find the correct week
    const weekData = activeCourse.weeks.find((week) => week.week === currentWeek);

    if (!weekData) {
      return res.status(404).json({ message: 'Current week data not found.' });
    }

    // Find the correct day within that week
    const dayData = weekData.days.find((day) => day.day === currentDay);

    if (!dayData) {
      return res.status(404).json({ message: 'Current day data not found.' });
    }

    // Format and send response with the tasks for the current day
    const tasksForCurrentDay = dayData.tasks.map((task) => ({
      name: task.name,
      description: task.description,
      points: task.points,
    }));

    res.status(200).json({
      currentTasks: {
        week: currentWeek,
        day: currentDay,
        focus: dayData.focus,
        tasks: tasksForCurrentDay,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard tasks:', error);
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { displayDashboardTasks, displayDashboardPlan };
