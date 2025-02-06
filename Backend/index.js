import express from 'express';
import userRoutes from './routes/auth.js';
import noteRoutes from './routes/notes.js';
import connectDB from './db.js';

const app = express();
const port = 3001;
connectDB();
app.use('/api/auth', userRoutes);
app.use('/api/notes', noteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
