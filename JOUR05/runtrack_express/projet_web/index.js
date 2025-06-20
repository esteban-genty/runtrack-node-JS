const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Bonjour depuis Express!');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
