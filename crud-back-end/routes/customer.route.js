const express = require('express');
const router = express.Router();
const customer = require('../controllers/customer.controller.js');

/**
 * Add a new customer
 */
router.post('/api/customer', customer.create);
/**
 * Update an customer
 */
router.put('/api/customer/:id', customer.update);
/**
 * Delete an customer by Id
 */
router.delete('/api/customer/:id', customer.delete);
/**
 * Get all customers
 */
router.get('/api/customer', customer.findAll);
/**
 * Retrieve a single customer by Id
 */
router.get('/api/customer/:id', customer.findById);

module.exports = router;