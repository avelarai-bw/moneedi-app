const express = require('express');
const router = express.Router();
const { chatWithMoneedi } = require('../controllers/aiController');

router.post('/ai', chatWithMoneedi);

module.exports = router;