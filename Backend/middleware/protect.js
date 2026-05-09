const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Admin = require('../models/Admin');

const protect = async (req, res, next) => {
    let token;

    if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if admin or user
        if (decoded.role === 'admin' || decoded.role === 'superadmin') {
            req.user = await Admin.findById(decoded.id).select('-password');
        } else {
            req.user = await User.findById(decoded.id).select('-password');
        }

        if (!req.user || !req.user.isActive) {
            return res.status(401).json({ message: "User not found or inactive" });
        }

        req.user.role = decoded.role;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

module.exports = protect;