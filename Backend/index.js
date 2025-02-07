import express from 'express';
import userRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';
import connectDB from './db.js';

const app = express();
const port = 3001;
app.use(express.json());
connectDB();
app.use((err, req, res, next) => {
  console.error('❌ Internal Server Error:', err);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

app.use('/api/auth', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
