const { Reminder, Client } = require('../models');
const { Op } = require('sequelize');

// Get all reminders
const getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.findAll({
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });
        res.json(reminders);
    } catch (error) {
        console.error('Error fetching reminders:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single reminder
const getReminder = async (req, res) => {
    try {
        const reminder = await Reminder.findByPk(req.params.id, {
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });

        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        res.json(reminder);
    } catch (error) {
        console.error('Error fetching reminder:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new reminder
const createReminder = async (req, res) => {
    try {
        const reminder = await Reminder.create(req.body);
        res.status(201).json(reminder);
    } catch (error) {
        console.error('Error creating reminder:', error);
        res.status(400).json({ message: error.message });
    }
};

// Update a reminder
const updateReminder = async (req, res) => {
    try {
        const reminder = await Reminder.findByPk(req.params.id);

        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        await reminder.update(req.body);
        res.json(reminder);
    } catch (error) {
        console.error('Error updating reminder:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a reminder
const deleteReminder = async (req, res) => {
    try {
        const reminder = await Reminder.findByPk(req.params.id);

        if (!reminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        await reminder.destroy();
        res.json({ message: 'Reminder deleted successfully' });
    } catch (error) {
        console.error('Error deleting reminder:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get client reminders
const getClientReminders = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const reminders = await Reminder.findAll({
            where: { client_id: clientId },
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });

        res.json(reminders);
    } catch (error) {
        console.error('Error fetching client reminders:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get upcoming reminders
const getUpcomingReminders = async (req, res) => {
    try {
        const today = new Date();
        const nextMonth = new Date();
        nextMonth.setMonth(today.getMonth() + 1);

        const reminders = await Reminder.findAll({
            where: {
                remind_date: {
                    [Op.between]: [today, nextMonth]
                },
                sent: false
            },
            include: [{ model: Client, attributes: ['id', 'name', 'email', 'phone'] }],
            order: [['remind_date', 'ASC']]
        });

        res.json(reminders);
    } catch (error) {
        console.error('Error fetching upcoming reminders:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getReminders,
    getReminder,
    createReminder,
    updateReminder,
    deleteReminder,
    getClientReminders,
    getUpcomingReminders
};