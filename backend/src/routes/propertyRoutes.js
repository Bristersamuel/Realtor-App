const express = require('express');
const router = express.Router();
const {
    getProperties,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getClientProperties
} = require('../controllers/propertyController');

// Routes
router.get('/', getProperties);
router.get('/:id', getProperty);
router.post('/', createProperty);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);
router.get('/client/:clientId', getClientProperties);

module.exports = router;