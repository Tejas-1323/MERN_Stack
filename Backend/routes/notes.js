import express from 'express';
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.send('Notes route is working!');
});

// Export as default
export default router;
