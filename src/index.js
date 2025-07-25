const express = require('express');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('MS-Cripto Backend is running 🎉');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
