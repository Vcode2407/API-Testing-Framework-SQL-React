const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123', // Replace with your MySQL root password
    database: 'test_db'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/api/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));