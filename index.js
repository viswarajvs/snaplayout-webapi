require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");

const fileRoutes = require('./routes/fileRoutes');
const layoutRoutes = require('./routes/layoutRoutes');

const app = express();
// Allow CORS from React dev server
app.use(cors({
  origin: process.env.ORIGIN,
  credentials: false                // if using cookies/auth headers
}));
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/api/files', fileRoutes);
app.use('/api/layouts', layoutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server started`);
});
