const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Client = require('./client');

const Reminder = sequelize.define('Reminder', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id'
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    remind_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Define association
Reminder.belongsTo(Client, { foreignKey: 'client_id' });
Client.hasMany(Reminder, { foreignKey: 'client_id' });

module.exports = Reminder;