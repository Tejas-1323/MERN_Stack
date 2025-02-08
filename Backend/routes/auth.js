import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import fetchUser from '../middleware/fetchUser.js';
const router = express.Router();

//register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });

    // Save user to database
    await newUser.save();
    const mydata = {
      user: {
        id: newUser.id,
      },
    };

    const sKey = process.env.S_KEY;
    const authToken = jwt.sign(mydata, sKey);

    res.status(200).send({ message: 'User created successfully', authToken });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Error creating user', error });
  }
});

// login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if user already exists
    const newUser = await User.findOne({ email });

    if (!newUser) {
      return res.status(400).json({ message: 'User not exists' });
    }

    const passwordCompaire = await bcrypt.compare(password, newUser.password);

    if (!passwordCompaire) {
      return res.status(400).json({ message: 'Please try again' });
    }

    const mydata = {
      user: {
        id: newUser.id,
      },
    };
    const sKey = process.env.S_KEY;
    const authToken = jwt.sign(mydata, sKey);

    res
      .status(200)
      .send({ message: 'Login the user successfully!', authToken });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Error creating user', error });
  }
});

// get userDetailes

router.post('/getUser', fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select('-password');
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user', error });
  }
});

export default router;
