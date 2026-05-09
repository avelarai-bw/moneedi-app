const express = require('express');
const router = express.Router();
const { registerUser, login, logout } = require('../controllers/authController');
const protect = require('../middleware/protect');

router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout', logout);

// Protected test route
router.get('/me', protect, (req, res) => {
    res.json(req.user);
});

module.exports = router;