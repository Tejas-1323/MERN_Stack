const mongoose = require('mongoose');

// Define the Schema (Blueprint)
const NotesSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String,  require: true },
  tag: { type: String,default:"General" },
  date: { type: Date, default: Date.now },
});

// Create the Model from the Schema
const Note = mongoose.model('note', NotesSchema);

module.exports = Note;
