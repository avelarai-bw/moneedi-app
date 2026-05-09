// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
    return jwt.sign(
        { id, role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || '30d' }
    );
};

const setTokenCookie = (res, token) => {
    const isProduction = process.env.NODE_ENV === 'production';

    res.cookie('jwt', token, {
        httpOnly: true,           // Prevent access via JavaScript
        secure: isProduction,     // Use HTTPS in production
        sameSite: 'strict',       // Protect against CSRF
        maxAge: 30 * 24 * 60 * 60 * 1000   // 30 days
    });
};

module.exports = { generateToken, setTokenCookie };