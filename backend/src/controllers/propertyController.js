const { Property, Client } = require('../models');

// Get all properties
const getProperties = async (req, res) => {
    try {
        const properties = await Property.findAll({
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });
        res.json(properties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single property
const getProperty = async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id, {
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.json(property);
    } catch (error) {
        console.error('Error fetching property:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new property
const createProperty = async (req, res) => {
    try {
        const property = await Property.create(req.body);
        res.status(201).json(property);
    } catch (error) {
        console.error('Error creating property:', error);
        res.status(400).json({ message: error.message });
    }
};

// Update a property
const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await property.update(req.body);
        res.json(property);
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a property
const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id);

        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await property.destroy();
        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        console.error('Error deleting property:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get properties by client
const getClientProperties = async (req, res) => {
    try {
        const clientId = req.params.clientId;
        const properties = await Property.findAll({
            where: { client_id: clientId },
            include: [{ model: Client, attributes: ['id', 'name', 'email'] }]
        });

        res.json(properties);
    } catch (error) {
        console.error('Error fetching client properties:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getClientProperties
};