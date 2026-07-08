require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the server' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'Server is healthy' });
});


app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${PORT}`);
});
