import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  console.error('❌ DB_URI not defined in .env file');
  process.exit(1); // Exit the process if DB_URI is missing
}

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
