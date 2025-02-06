import express from 'express'; // Use `import` instead of `require`
const router = express.Router();

// Your routes and logic
router.get('/', (req, res) => {
  res.send('Auth route working!');
});

export default router; // Use `export` instead of `module.exports`
