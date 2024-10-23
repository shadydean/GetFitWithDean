const express = require('express');
const {displayProgress} = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/progress', protect, displayProgress);

module.exports = router;
