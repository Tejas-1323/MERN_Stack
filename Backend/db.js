const mongoose = require("mongoose");

const DB_URI = "mongodb://localhost:27017/INotbook"; // Change as needed

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;
