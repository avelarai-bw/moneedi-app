// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect');
const { createOrder, getMyOrders, getOrderById,deleteOrder } = require('../controllers/orderController');

router.use(protect);                    // All order routes are protected

router.post('/order', createOrder);
router.get('/orders', getMyOrders);
router.get('orders/:id', getOrderById);
router.delete('orders/:id', deleteOrder);   // ← Add this

module.exports = router;