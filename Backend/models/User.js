import mongoose from 'mongoose';

// Define the Schema (Blueprint)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  date: { type: Date, default: Date.now },
});

// Create the Model from the Schema
const User = mongoose.model('user', userSchema);

export default User;
