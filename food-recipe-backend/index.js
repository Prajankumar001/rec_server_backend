const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipes');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB!");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Routes
app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Food Recipe Website!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
