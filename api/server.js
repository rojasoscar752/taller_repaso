const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando con Express.js' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor API corriendo en http://localhost:${PORT}`);
});
