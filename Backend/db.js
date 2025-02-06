import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/INotbook'; // Fallback to default if not set

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected Successfully!');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error);
    process.exit(1); // Exit the process if connection fails
  }
};

export default connectDB;
