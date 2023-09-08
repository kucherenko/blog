import express from 'express';
import csvParser from 'csv-parser';
import sqlite3 from 'sqlite3';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  const results: any[] = [];

  fs.createReadStream('channels.csv')
    .pipe(csvParser())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const db = new sqlite3.Database('data.db');

      db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS feeds (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, link TEXT)`);

        const stmt = db.prepare(`INSERT INTO feeds (title, link) VALUES (?, ?)`);

        results.forEach((row) => {
          stmt.run(row.title, row.link);
        });

        stmt.finalize();

        db.close();
        res.send('Data saved to database.');
      });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
