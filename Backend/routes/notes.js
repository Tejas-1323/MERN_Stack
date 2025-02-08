import express from 'express';
const router = express.Router();
import fetchUser from '../middleware/fetchUser.js';
import Note from '../models/Notes.js';

// Define your routes
router.post('/addnotes', fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title || !description || !tag) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const note = new Note({
      title,
      description,
      tag,
      user: req.user.id,
    });
    await note.save();

    res.status(200).send({ note });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Error creating user', error });
  }
});

router.get('/fetchallnotes', fetchUser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.status(200).send({ notes });
});

router.put('/updatenode/:id', fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title || !description || !tag) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send('Not Found');
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send('not Allowed');
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );

    res.status(200).send({ note });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Error creating user', error });
  }
});

router.delete('/deletenotes/:id', fetchUser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).send({ message: 'Not Found' });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send({ message: 'Not Found' });
    }

    await Note.findByIdAndDelete(req.params.id);

    res.status(200).send({ message: `Note deleted successfully`, note });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

// Export as default
export default router;
