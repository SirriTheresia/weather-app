// authRoutes.js

const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../config/db'); // Import the MySQL connection from db.js

const router = express.Router();

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send('User registered successfully');
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Implement user login logic using MySQL queries
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
