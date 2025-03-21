const express = require('express');
const router = express.Router();
const {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
} = require('../controllers/clientController');

// Routes
router.get('/', getClients);
router.get('/:id', getClient);
router.post('/', createClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient);

module.exports = router;