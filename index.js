const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from your Node.js API running with Docker + CI/CD!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

