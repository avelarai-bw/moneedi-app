const User = require('../models/User');
const Admin = require('../models/Admin');
const { generateToken, setTokenCookie } = require('../utils/generateToken');

// @desc    Register new customer
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
    const { firstName, surname, email, phoneNumber, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            firstName,
            surname,
            email,
            phoneNumber,
            password
        });

        const token = generateToken(user._id, 'customer');
        setTokenCookie(res, token);

        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            surname: user.surname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: 'customer'
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Server error during registration" });
    }
};

// @desc    Login user or admin
// @route   POST /api/auth/login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await Admin.findOne({ email }).select('+password');
        let role = 'admin';

        if (!user) {
            user = await User.findOne({ email }).select('+password');
            role = 'customer';
        }

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (!user.isActive) {
            return res.status(403).json({ message: "Account is deactivated" });
        }

        const token = generateToken(user._id, role);
        setTokenCookie(res, token);

        res.json({
            _id: user._id,
            firstName: user.firstName,
            surname: user.surname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error during login" });
    }
};

// @desc    Logout user
// @route   POST /api/auth/logout
const logout = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { registerUser, login, logout };