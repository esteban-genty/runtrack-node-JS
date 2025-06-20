const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send("Page d'accueil");
})

app.get('/about', (req, res) => {
  res.send('Page à propos');
})

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
