// User.js

const db = require('../db');

// Define User Schema
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  save() {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [this.username, this.email, this.password], (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results.insertId);
      });
    });
  }
}

module.exports = User;
