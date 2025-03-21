const express = require('express');
const router = express.Router();
const {
    getReminders,
    getReminder,
    createReminder,
    updateReminder,
    deleteReminder,
    getClientReminders,
    getUpcomingReminders
} = require('../controllers/reminderController');

// Routes
router.get('/', getReminders);
router.get('/upcoming', getUpcomingReminders);
router.get('/:id', getReminder);
router.post('/', createReminder);
router.put('/:id', updateReminder);
router.delete('/:id', deleteReminder);
router.get('/client/:clientId', getClientReminders);

module.exports = router;