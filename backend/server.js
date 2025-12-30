const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const PORT = 5000;

const users = fs
  .readFileSync('users.txt', 'utf-8')
  .split('\n')
  .map(u => u.trim())
  .filter(Boolean)
  .sort();

app.get('/users', (req, res) => {
  const { letter = 'A', page = 1, limit = 100 } = req.query;

  const filtered = users.filter(u =>
    u.toUpperCase().startsWith(letter)
  );

  const start = (page - 1) * limit;
  const end = start + Number(limit);

  res.json(filtered.slice(start, end));
});

app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`)
);
