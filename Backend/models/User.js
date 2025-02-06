const mongoose = require('mongoose');

// Define the Schema (Blueprint)
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, unique: true, require: true },
  date: { type: Date, default: Date.now },
});

// Create the Model from the Schema
const User = mongoose.model('user', userSchema);

module.exports = User;
