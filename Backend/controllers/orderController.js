// controllers/orderController.js
const Order = require('../models/Order');

const createOrder = async (req, res) => {
    try {
        const { items, deliveryAddress, notes } = req.body;

        const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

        const order = await Order.create({
            customer: req.user._id,
            items,
            totalAmount,
            deliveryAddress,
            notes,
            status: 'pending'
        });

        res.status(201).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMyOrders = async (req, res) => {
    try {
        const orders = await Order.find({ customer: req.user._id })
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            customer: req.user._id
        });

        if (!order) return res.status(404).json({ message: "Order not found" });

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete order (only if pending)
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.params.id,
            customer: req.user._id
        });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (order.status !== 'pending') {
            return res.status(400).json({ message: "Only pending orders can be deleted" });
        }

        await order.deleteOne();
        res.json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { 
    createOrder, 
    getMyOrders, 
    getOrderById,
    deleteOrder     // ← Add this
};