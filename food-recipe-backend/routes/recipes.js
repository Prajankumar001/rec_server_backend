const mongoose = require('mongoose');

// Define Recipe schema
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  cuisine: { type: String },
  created_at: { type: Date, default: Date.now },
});

// Create and export Recipe model
module.exports = mongoose.model('Recipe', recipeSchema);
