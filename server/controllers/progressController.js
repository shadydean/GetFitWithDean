const User = require('../models/User');

const displayProgress = async (req, res) => {
    try {
        const userId = req.user.id; // Get the user ID from the request

        // Find the user and populate their active course
        const user = await User.findById(userId).populate('activeCourse');
        
        if (!user || !user.activeCourse) {
            return res.status(404).json({ message: 'No active course found for this user.' });
        }

        // Function to get tasks for all weeks and days
        function getTasksForAllWeeks(activeCourse) {
            return activeCourse.weeks.map(weekData => ({
                week: weekData.week,
                days: weekData.days.map(dayData => ({
                    day: dayData.day,
                    focus: dayData.focus,
                    tasks: dayData.tasks.map(task => ({
                        name: task.name,
                        description: task.description,
                        points: task.points
                    }))
                }))
            }));
        }
        // Get all tasks for the course
        const courseTasks = getTasksForAllWeeks(user.activeCourse);

        res.status(200).json({
            courseTasks // Returning tasks organized by week and day
        });
    } catch (error) {
        console.error('Error fetching progress:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};

module.exports = {
    displayProgress,
};
