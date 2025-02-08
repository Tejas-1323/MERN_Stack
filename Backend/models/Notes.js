import mongoose from 'mongoose';

// Define the Schema (Blueprint)
const NotesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, default: 'General' },
  date: { type: Date, default: Date.now },
});

// Create the Model from the Schema
const Note = mongoose.model('note', NotesSchema);

export default Note;
