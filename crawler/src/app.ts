import express, { Request, Response } from 'express';
import csvParser from 'csv-parser';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());

const db = new sqlite3.Database('data.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS feeds (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, link TEXT)`);
});

app.post('/register', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  db.serialize(() => {
    const stmt = db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`);
    stmt.run(username, hashedPassword);
    stmt.finalize();

    res.status(201).json({ message: 'User registered successfully' });
  });
});

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }

    if (!row) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = bcrypt.compareSync(password, row.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: row.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  });
});

app.get('/', (req: Request, res: Response) => {
  const results: any[] = [];

  fs.createReadStream('channels.csv')
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const stmt = db.prepare(`INSERT INTO feeds (title, link) VALUES (?, ?)`);

      results.forEach((row) => {
        stmt.run(row.title, row.link);
      });

      stmt.finalize();

      res.status(200).send('Data saved to database.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});