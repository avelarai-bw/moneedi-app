const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db.js');


dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS - Update this with your frontend URL later
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://moneedi-app2-bdqy.vercel.app/',
    'https://moneedi-app2-bdqy-5xuwtipko-avelarai269-4786s-projects.vercel.app/'
  ],
  credentials: true
}));

// Routes
app.use('/api', require('./routes/aiRoutes'));
app.use('/api', require('./routes/authRoutes'));
// Add these routes
app.use('/api', require('./routes/orderRoutes'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});