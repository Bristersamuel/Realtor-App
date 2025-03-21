const express = require('express');
const cors = require('cors');
const { sequelize, connectDB } = require('./config/db');
const clientRoutes = require('./routes/clientRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
// Add this line:
const reminderScheduler = require('./schedulers/reminderScheduler');

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/clients', clientRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/reminders', reminderRoutes);

app.get('/', (req, res) => {
    res.send('Realtor API is running');
});

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to sync database:', err);
});