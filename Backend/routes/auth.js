import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';

const router = express.Router();


router.post('/register', async (req, res) => {
  try {
    const {name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
      }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Save user to database
    await newUser.save();

    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Test route
router.get('/', (req, res) => {
  res.status(200).send({ message: 'Auth route working!' });
});

export default router;
