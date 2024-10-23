const express = require('express');
const { displayDashboardPlan, displayDashboardTasks } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/dashboard/plan', protect, displayDashboardPlan);
router.get('/dashboard/tasks', protect, displayDashboardTasks);

module.exports = router;
