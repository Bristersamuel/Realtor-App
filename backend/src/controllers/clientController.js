const { Client } = require('../models');

// Get all clients
const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        console.error('Error fetching clients:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single client
const getClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        res.json(client);
    } catch (error) {
        console.error('Error fetching client:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new client
const createClient = async (req, res) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (error) {
        console.error('Error creating client:', error);
        res.status(400).json({ message: error.message });
    }
};

// Update a client
const updateClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        await client.update(req.body);
        res.json(client);
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete a client
const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);

        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }

        await client.destroy();
        res.json({ message: 'Client deleted successfully' });
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
};