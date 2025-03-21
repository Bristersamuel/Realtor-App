const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Client = require('./client');

const Property = sequelize.define('Property', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Client,
            key: 'id'
        }
    },
    purchase_date: {
        type: DataTypes.DATE,
        allowNull: true
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
Property.belongsTo(Client, { foreignKey: 'client_id' });
Client.hasMany(Property, { foreignKey: 'client_id' });

module.exports = Property;