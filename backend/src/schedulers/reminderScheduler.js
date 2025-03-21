const cron = require('node-cron');
const { Reminder, Client } = require('../models');
const { Op } = require('sequelize');

// Function to check for today's reminders
const checkTodayReminders = async () => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Find reminders for today that haven't been sent
        const reminders = await Reminder.findAll({
            where: {
                remind_date: {
                    [Op.gte]: today,
                    [Op.lt]: tomorrow
                },
                sent: false
            },
            include: [{ model: Client }]
        });

        console.log(`Found ${reminders.length} reminders for today`);

        // Here you would add code to send emails/SMS
        // For each reminder in reminders:
        //   1. Send email/SMS
        //   2. Update reminder.sent = true

        // For now, just mark them as sent
        for (const reminder of reminders) {
            reminder.sent = true;
            await reminder.save();
            console.log(`Marked reminder ${reminder.id} as sent`);
        }

    } catch (error) {
        console.error('Error checking today\'s reminders:', error);
    }
};

// Function to generate upcoming birthday reminders
const generateBirthdayReminders = async () => {
    try {
        const today = new Date();
        const nextMonth = new Date(today);
        nextMonth.setMonth(today.getMonth() + 1);

        // Find clients with birthdays in the next month
        const clients = await Client.findAll({
            where: {
                birthday: {
                    [Op.not]: null
                }
            }
        });

        for (const client of clients) {
            if (!client.birthday) continue;

            const birthday = new Date(client.birthday);
            const thisYearBirthday = new Date(
                today.getFullYear(),
                birthday.getMonth(),
                birthday.getDate()
            );

            // If birthday is in the next month
            if (thisYearBirthday >= today && thisYearBirthday <= nextMonth) {
                // Check if reminder already exists
                const existingReminder = await Reminder.findOne({
                    where: {
                        client_id: client.id,
                        type: 'birthday',
                        remind_date: thisYearBirthday
                    }
                });

                if (!existingReminder) {
                    // Create birthday reminder
                    await Reminder.create({
                        client_id: client.id,
                        type: 'birthday',
                        title: `${client.name}'s Birthday`,
                        message: `Reminder: ${client.name}'s birthday is coming up on ${thisYearBirthday.toLocaleDateString()}!`,
                        remind_date: thisYearBirthday,
                        sent: false
                    });

                    console.log(`Created birthday reminder for ${client.name}`);
                }
            }
        }
    } catch (error) {
        console.error('Error generating birthday reminders:', error);
    }
};

// Schedule daily check at 9 AM
cron.schedule('0 9 * * *', checkTodayReminders);

// Schedule weekly generation of new reminders (Monday at 1 AM)
cron.schedule('0 1 * * 1', async () => {
    console.log('Generating new reminders for the week');
    await generateBirthdayReminders();
    // Add more reminder generation functions here
});

module.exports = {
    checkTodayReminders,
    generateBirthdayReminders
};